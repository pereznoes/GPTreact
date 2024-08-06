import { GptMessage, MyMessage, TypingLoader } from "../../components"

export const OrthographyPage = () => {
  return (
    <div className="chat-container">
      <div className="chat-messages">
        <div className="grid grid-cols-12 gap-y-2">

          {/* Bienvenida */}
          <GptMessage text="Hola, puedes escribir tu texto y te ayudo con la ortografía" />



          <MyMessage text="Hola Mundo" />

          
          <TypingLoader className="fade-in" />



        </div>
      </div>
    </div>
  )
}
