import { useState, useEffect } from "react";
import { correctResult, wrongResult } from '../data/resultText';
import convertTone from "../utils/convert_tone_to_letter";
import kautianJi from '../data/hanji_lomaji_array.json';
import kautianSu from '../data/kautian_su.json'

function WordTest() {
  const [inputValue, setInputValue] = useState('')
  const [question, setQuestion] = useState('')
  const [answers, setAnsweres] = useState([])
  const [showAnswers, setShowAnswers] = useState(false)
  const [result, setResult] = useState('')
  const [resultText, setResultText] = useState('')
  const [data, setData] = useState(kautianJi)
  const [questionsType, setQuestionsType] = useState('kautianJi')
  const [filteredQuestions, setFilteredQuestions] = useState(data.filter(d => d['k700']));

  function changeQuestionType(newType) {
    setQuestionsType(newType)
    if (newType == 'kautianJi') {
      setData(kautianJi)
    } else if (newType == 'kautianSu') {
      setData(kautianSu)
      setFilteredQuestions(kautianSu)
    }
  }

  //產生題目
  function renderQuestion() {
    const myWord = filteredQuestions[Math.floor(Math.random() * filteredQuestions.length)];
    setQuestion(myWord['ji']);
    setAnsweres(myWord['lo']);
    setInputValue('');
    setResult('');
    setResultText('');
    setShowAnswers(false);
  }

  //檢測答案
  function test() {
    if (inputValue.trim() == '') {
      setResult('wrong');
      return;
    }
    //聲調數字轉羅馬字
    const convertedInputValue = convertTone(inputValue.trim())
    console.log(answers.map(a=>a.replaceAll('-',' ')))
    console.log(convertedInputValue)
    if (answers.includes(convertedInputValue)) {
      setResult('correct');
      setResultText(correctTextRand);
    } else if (answers.map(a=>a.replaceAll('-',' ')).includes(convertedInputValue)){
      setResult('correct');
      setResultText(correctTextRand);
    } else {
      setResult('wrong');
      setResultText(wrongTextRand)
    }
  }

  //按鍵處理: 後一題 看答案 驗證
  function handleKeyDown(e) {
    if (e.ctrlKey && e.code === 'Enter') {
      renderQuestion();
      setInputValue('');
      setResult('');
      setResultText('');
      setShowAnswers(false);
    } else if (e.altKey && e.code === 'Enter') {
      setShowAnswers(!showAnswers);
    } else if (e.code === 'Enter') {
      test()
    }
  }

  //第一次載入題目
  useEffect(() => {
    renderQuestion()
  }, [])

  //篩選題目
  function handleFilter(value) {
    if (value == 'all')
      setFilteredQuestions(data)
    else if (value == 'subok')
      setFilteredQuestions(data.filter(d => d['subok']))
    else if (value == 'k700')
      setFilteredQuestions(data.filter(d => d['k700']))
  }

  //結果改變時重設結果文字
  // useEffect(() => {
  //   if (result === 'correct') {
  //     setResultText(correctTextRand)
  //     setShowAnswers(true)
  //   } else if (result === 'wrong') {
  //     setResultText(wrongTextRand)
  //   }
  // }, [result])

  //隨機產生結果文字
  function correctTextRand() {
    return correctResult[Math.floor(Math.random() * correctResult.length)];
  }
  function wrongTextRand() {
    return wrongResult[Math.floor(Math.random() * wrongResult.length)];
  }

  return (
    <div className="">

      <div className='filter-select mb-3'>
        <select className="form-select" aria-label="Default select example"
          onChange={(e) => changeQuestionType(e.target.value)}
          >
          <option value='kautianJi'>{'字'}</option>
          <option value='kautianSu'>{'詞'}</option>
        </select>
      </div>

      <div className='filter-select mb-3'>
        <select className="form-select" aria-label="Default select example"
          onChange={(e) => handleFilter(e.target.value)}
          defaultValue={questionsType == 'kautianJi' ? 'k700' : ''}
          disabled={questionsType == 'kautianSu'}
        >
          <option value='k700'>{'初級 (教育部700字)'}</option>
          <option value='subok'>{'中高級 (教典詞目4500字)'}</option>
          <option value='all'>{'教典級 (教典12000字)'}</option>
        </select>
      </div>

      <p className="d-flex justify-content-center question-text">{question}</p>

      <input type='text' className='form-control mb-3 w-75 mx-auto'
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
      />

      <div className='d-flex justify-content-center m-3 gap-2 control-btn'>
        <button type='button' className='btn btn-light btn-sm next-btn'
          onClick={renderQuestion}>後一題 <span>Ctrl+Enter</span>
        </button>
        <button type='button' className='btn btn-light btn-sm submit-btn'
          onClick={test}>送出 <span>Enter</span>
        </button>
      </div>

      <div className={'mb-3 ' + result}>
        {resultText}
      </div>

      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button className={`accordion-button answer-btn ${showAnswers ? '' : 'collapsed'}`}
              type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
              aria-expanded={showAnswers} aria-controls="collapseOne">
              答案  <span> Alt+Enter</span>
            </button>
          </h2>
          <div id="collapseOne" className={`accordion-collapse collapse ${showAnswers ? 'show' : ''}`} aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body answer-body">
              {<ul className='mb-1'>
                {answers.map((a, i) => <li key={i}>{a}</li>)}
              </ul>}
              <a target='_blank' href={`https://sutian.moe.edu.tw/zh-hant/tshiau/?lui=tai_su&tsha=${question}`}>看教典↗</a><br />
              <a target='_blank' href={`https://chhoe.taigi.info/search?method=basic&searchMethod=equals&spellingMethod=PojInput&taibun=${question}`}>ChhoeTaigi↗</a><br />
              <a target='_blank' href={`https://www.youtube.com/results?search_query=逐工一字+${question}`}>郭于中 逐工一字↗</a>
            </div>
          </div>
        </div>
      </div>
      {/* {
        showAnswers ?
          (<div className='answers'>
            <span>答案 / </span>
            <span>
              <a target='_blank' href={'https://sutian.moe.edu.tw/zh-hant/tshiau/?lui=tai_su&tsha=' + question}>教典</a>
            </span>
            {<ul>
              {answers.map((a, i) => <li key={i}>{a}</li>)}
            </ul>}
          </div>)
          : ''
      } */}
    </div>
  )
}

export default WordTest