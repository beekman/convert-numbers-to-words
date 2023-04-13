import './App.css'
import './utils/numberConverter.tsx'
import ConvertibleDisplay from './components/ConvertibleDisplay'
import ConvertibleClock from './components/ConvertibleClock'
import ConvertibleBeers from './components/ConvertibleBeers'

export default function App() {
  return (
    <main>
      <ConvertibleDisplay />
      <ConvertibleClock />
      <ConvertibleBeers />
    </main>
  )
}