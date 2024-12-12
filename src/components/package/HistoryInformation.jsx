import React from 'react'

const HistoryInformation = ({history}) => {
  return (
    <div className="flex flex-col w-full">
      {history.map((item, index) => {
        return (
          <div key={item.id} className="w-full flex-col flex">
            <div className="w-full p-3 border flex justify-between items-center gap-5">
              <span className="text-primary text-xs w-1/2">
                {item.location}
              </span>
              <span className="text-green-400 text-xs w-1/2 text-right">
                {new Date(item.created_at).toLocaleString()}
              </span>
            </div>
            {index !== history.length - 1 && (
              <div className="w-full flex justify-center my-2">
                <i className="fa-solid fa-arrow-down text-primary"></i>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default HistoryInformation
