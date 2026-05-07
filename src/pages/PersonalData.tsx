import {GridContactsContainer} from "../sections/Contacts.tsx";

export default function PersonalData() {
  return (
    <div className="mt-7.5">
      <h1 className="uppercase font-semibold text-2xl md:text-[50px] md:tracking-[-2px] xl:text-[70px] text-center">
        политика обработки персональных данных
      </h1>
      <p className="mt-6 text-[18px] md:text-[20px] lg:text-2xl">
        Настоящая политика конфиденциальности определяет порядок обработки и защиты информации, предоставляемой пользователями на данном сайте.
      </p>
      <ol className="list-decimal mt-5 flex flex-col gap-5 text-[18px] md:text-[20px] lg:text-2xl px-6">
        <li>
          Какие данные собираются
          <p>
            При использовании сайта пользователь может добровольно предоставить следующие данные:
            <ul className="list-none">
              <li>- имя;</li>
              <li>- адрес электронной почты;</li>
              <li> - текст сообщения, отправленного через форму обратной связи.</li>
            </ul>
          </p>
        </li>
        <li>
          Цель сбора данных
          <p>
            Предоставленные данные используются исключительно для:
            <ul className="list-none">
              <li>- обратной связи с пользователем;</li>
              <li>- обсуждения возможного сотрудничества;</li>
              <li>- ответа на запросы и заявки.</li>
            </ul>
          </p>
        </li>
        <li>
          Передача данных третьим лицам
          <p>
            Персональные данные не передаются третьим лицам и не используются в иных целях, кроме указанных выше.
          </p>
        </li>
        <li>
          Защита информации
          <p>
            Принимаются разумные меры для защиты предоставленной информации от несанкционированного доступа.

          </p>
        </li>
        <li>
          Cookies и технические данные
          <p>
            Сайт может использовать cookies и технические данные (IP-адрес, данные браузера, время посещения) для корректной работы сайта и анализа посещаемости.
          </p>
        </li>
        <li>
          Контакты
          <p>
            По вопросам обработки данных пользователь может связаться по электронной почте: daryabogdan17@gmail.com
          </p>
        </li>
      </ol>

      <div className="hidden md:flex w-full h-14.25 gap-x-4 lg:gap-x-5 xl:gap-x-7.5 mt-20 lg:mt-25 xl:mt-50">
        <div className="bg-[#cab9e6] flex-1 flex justify-center items-center text-[28px] lg:text-[35px]">Telegram</div>
        <div className="bg-[#cab9e6] flex-1 flex justify-center items-center text-[28px] lg:text-[35px]">Behance</div>
        <div className="bg-[#cab9e6] flex-1 flex justify-center items-center text-[28px] lg:text-[35px]">Instagram</div>
      </div>
      <GridContactsContainer className={"block md:hidden mt-10"} />
    </div>

  )
}