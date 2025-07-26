import React, { Suspense } from 'react';
import Question from './Question';

const Questions = ({data}) => {
    return (
        <div>
          <div className="bg-gray-300 py-5 my-5 dark:bg-gray-900 dark:text-white">
      <h2 className="text-2xl font-bold text-center my-2">
        Frequently Asked Questions
      </h2>

      <Suspense
        fallback={<span className="loading loading-bars loading-xl"></span>}
      >
        <div className="space-y-1 px-2">
          {data.map((singleQuestion) => (
            <Question
              key={singleQuestion.id}
              singleQuestion={singleQuestion}
            ></Question>
          ))}
        </div>
      </Suspense>
    </div>  
        </div>
    );
};

export default Questions;