import Column from '../Column/Column'

function Main() {
  const columns = [
    { title: 'Без статуса' },
    { title: 'Нужно сделать' },
    { title: 'В работе' },
    { title: 'Тестирование' },
    { title: 'Готово' },
  ]

  return (
    <main className="main">
      <div className="container">
        <div className="main__block">
          <div className="main__content">
            {columns.map((column, index) => (
              <Column key={index} title={column.title} />
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}

export default Main