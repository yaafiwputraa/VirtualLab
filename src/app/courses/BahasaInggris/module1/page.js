'use client';
import React, { useState, useEffect } from 'react';
import { Book, Clock, CheckCircle, AlertCircle, ChevronRight } from 'lucide-react';

const ReadingModule = () => {
  const [timeLeft, setTimeLeft] = useState(120); // 2 minutes in seconds
  const [isReading, setIsReading] = useState(false);
  const [currentSection, setCurrentSection] = useState('intro'); // intro, reading, questions
  const [currentQuestionSet, setCurrentQuestionSet] = useState('fill-blanks'); // fill-blanks, multiple-choice
  const [selectedAnswers, setSelectedAnswers] = useState({});

  const fillBlanksQuestions = [
    {
      id: 1,
      text: "Most climbers use oxygen past _______ metres.",
      answer: "7,000"
    },
    {
      id: 2,
      text: "Kilian's resting heartbeat is _______ beats per minute.",
      answer: "33"
    },
    {
      id: 3,
      text: "Kilian completed his second Everest ascent in _______ hours.",
      answer: "17"
    }
  ];

  const multipleChoiceQuestions = [
    {
      id: 1,
      question: "At what age did Kilian start taking his training 'seriously'?",
      options: ["7 years old", "10 years old", "13 years old", "18 years old"],
      correct: 2
    },
    {
      id: 2,
      question: "Where did Kilian grow up?",
      options: ["The Alps", "The Pyrenees", "Mount Everest", "The Andes"],
      correct: 1
    },
    {
      id: 3,
      question: "How many hours of endurance training does Kilian do per year?",
      options: ["840 hours", "940 hours", "1040 hours", "1140 hours"],
      correct: 3
    }
  ];

  useEffect(() => {
    let timer;
    if (isReading && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setCurrentSection('questions');
      setIsReading(false);
    }
    return () => clearInterval(timer);
  }, [timeLeft, isReading]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleStartReading = () => {
    setIsReading(true);
    setCurrentSection('reading');
  };

  const handleQuestionSetChange = (set) => {
    setCurrentQuestionSet(set);
  };

  const handleSubmit = () => {
    console.log('Submitted answers:', selectedAnswers);
    alert('Answers submitted successfully!');
  };

  const renderQuestionSection = () => {
    return (
      <div className="space-y-8">
        <div className="flex space-x-4 mb-8">
          <button
            onClick={() => handleQuestionSetChange('fill-blanks')}
            className={`px-6 py-3 rounded-lg transition-all ${
              currentQuestionSet === 'fill-blanks'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-100 hover:bg-gray-200'
            }`}
          >
            Fill in the Blanks
          </button>
          <button
            onClick={() => handleQuestionSetChange('multiple-choice')}
            className={`px-6 py-3 rounded-lg transition-all ${
              currentQuestionSet === 'multiple-choice'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-100 hover:bg-gray-200'
            }`}
          >
            Multiple Choice
          </button>
        </div>

        {currentQuestionSet === 'fill-blanks' ? (
          <div className="space-y-6">
            {fillBlanksQuestions.map((q) => (
              <div key={q.id} className="p-6 bg-white rounded-xl shadow-sm">
                <p className="text-lg mb-4">{q.text}</p>
                <input
                  type="text"
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Your answer..."
                  value={selectedAnswers[`fill-${q.id}`] || ''}
                  onChange={(e) =>
                    setSelectedAnswers({
                      ...selectedAnswers,
                      [`fill-${q.id}`]: e.target.value
                    })
                  }
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-6">
            {multipleChoiceQuestions.map((q) => (
              <div key={q.id} className="p-6 bg-white rounded-xl shadow-sm">
                <p className="text-lg mb-4">{q.question}</p>
                <div className="space-y-3">
                  {q.options.map((option, idx) => (
                    <label
                      key={idx}
                      className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors"
                    >
                      <input
                        type="radio"
                        name={`q-${q.id}`}
                        value={idx}
                        checked={selectedAnswers[`mc-${q.id}`] === idx}
                        onChange={() =>
                          setSelectedAnswers({
                            ...selectedAnswers,
                            [`mc-${q.id}`]: idx
                          })
                        }
                        className="w-4 h-4 text-blue-500"
                      />
                      <span className="ml-3">{option}</span>
                    </label>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
        
        <div className="flex justify-end mt-8">
          <button 
            onClick={handleSubmit}
            className="px-8 py-4 bg-green-500 text-white rounded-xl hover:bg-green-600 transition-colors"
          >
            Submit Answers
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-6xl mx-auto p-8 pt-20">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
            Reading Comprehension
          </h1>
          <p className="text-gray-600 text-lg">
            Master the art of quick and effective reading
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold">Progress</h2>
                <Clock className="w-5 h-5 text-blue-500" />
              </div>
              <div className="flex flex-col space-y-2">
                <div className="w-full bg-gray-100 rounded-full h-2">
                  <div
                    className="bg-blue-500 h-2 rounded-full transition-all"
                    style={{
                      width: `${(timeLeft / 120) * 100}%`
                    }}
                  ></div>
                </div>
                <span className="text-sm text-gray-600">
                  Time remaining: {formatTime(timeLeft)}
                </span>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
              <div className="flex items-center space-x-2 mb-4">
                <Book className="w-5 h-5 text-blue-500" />
                <h2 className="text-lg font-semibold">Instructions</h2>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1" />
                  <span className="text-sm">Read carefully within time limit</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1" />
                  <span className="text-sm">Focus on key details</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1" />
                  <span className="text-sm">Complete both question sets</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl shadow-sm p-8 border border-gray-100">
              {currentSection === 'intro' && (
                <div className="text-center py-12">
                  <h2 className="text-2xl font-bold mb-6">Ready to begin?</h2>
                  <p className="text-gray-600 mb-8">
                    You'll have 2 minutes to read the text, followed by comprehension questions.
                  </p>
                  <button
                    onClick={handleStartReading}
                    className="px-8 py-4 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-colors flex items-center mx-auto space-x-2"
                  >
                    <span>Start Reading</span>
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              )}

              {currentSection === 'reading' && (
                <div className="prose max-w-none">
                  <div className="bg-gray-50 p-8 rounded-xl h-[600px] overflow-y-auto">
                    <p className="text-lg leading-relaxed">
                    When you picture mountain climbers scaling Mount Everest, what probably comes to mind are teams of climbers with Sherpa guides leading them to the summit, equipped with oxygen masks, supplies and tents. And in most cases you'd be right, as 97 per cent of climbers use oxygen to ascend to Everest's summit at 8,850 metres above sea level. The thin air at high altitudes makes most people breathless at 3,500 metres, and the vast majority of climbers use oxygen past 7,000 metres. A typical climbing group will have 8–15 people in it, with an almost equal number of guides, and they'll spend weeks to get to the top after reaching Base Camp.

But ultra-distance and mountain runner Kilian Jornet Burgada ascended the mountain in May 2017 alone, without an oxygen mask or fixed ropes for climbing.

Oh, and he did it in 26 hours.

With food poisoning.

And then, five days later, he did it again, this time in only 17 hours.

Born in 1987, Kilian has been training for Everest his whole life. And that really does mean his whole life, as he grew up 2,000 metres above sea level in the Pyrenees in the ski resort of Lles de Cerdanya in Catalonia, north-eastern Spain. While other children his age were learning to walk, Kilian was on skis. At one and a half years old he did a five-hour hike with his mother, entirely under his own steam. He left his peers even further behind when he climbed his first mountain and competed in his first cross-country ski race at age three. By age seven, he had scaled a 4,000er and, at ten, he did a 42-day crossing of the Pyrenees.

He was 13 when he says he started to take it 'seriously' and trained with the Ski Mountaineering Technical Centre (CTEMC) in Catalonia, entering competitions and working with a coach. At 18, he took over his own ski-mountaineering and trail-running training, with a schedule that only allows a couple of weeks of rest a year. He does as many as 1,140 hours of endurance training a year, plus strength training and technical workouts as well as specific training in the week before a race. For his record-breaking ascent and descent of the Matterhorn, he prepared by climbing the mountain ten times until he knew every detail of it, even including where the sun would be shining at every part of the day.

Sleeping only seven hours a night, Kilian Jornet seems almost superhuman. His resting heartbeat is extremely low at 33 beats per minute, compared with the average man's 60 per minute or an athlete's 40 per minute. He breathes more efficiently than average people too, taking in more oxygen per breath, and he has a much faster recovery time after exercise as his body quickly breaks down lactic acid – the acid in muscles that causes pain after exercise.

All this is thanks to his childhood in the mountains and to genetics, but it is his mental strength that sets him apart. He often sets himself challenges to see how long he can endure difficult conditions in order to truly understand what his body and mind can cope with. For example, he almost gave himself kidney failure after only drinking 3.5 litres of water on a 100km run in temperatures of around 40°C.

It would take a book to list all the races and awards he's won and the mountains he's climbed. And even here, Kilian’s achievements exceed the average person as, somehow, he finds time to record his career on his blog and has written three books, Run or Die, The Invisible Border and Summits of My Life.
                    </p>
                  </div>
                </div>
              )}

              {currentSection === 'questions' && renderQuestionSection()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadingModule;