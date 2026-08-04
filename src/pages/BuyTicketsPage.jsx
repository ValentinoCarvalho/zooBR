import { Footer } from "../elements/Footer"
import { HeaderNav } from "../elements/HeaderNav"
import { MobileHeader } from "../elements/MobileHeader"
import { Notification } from "../elements/Notification/Notification"
import { useState } from "react"
import './pagesStyles/BuyTicketsPage.css'
import { Link } from "react-router-dom"

export const BuyTicketsPage = () => {
    const today = new Date()
    today.setHours(0, 0, 0, 0)

    const [currentlyMonth, setCurrentlyMonth] = useState(today.getMonth())
    const [calendarDisplayYear, setCalendarDisplayYear] = useState(today.getFullYear())

    // Guarda o dia escolhido + o momento exato da escolha
    const [selectedDate, setSelectedDate] = useState(null)
    // selectedDate = { dayKey, day, month, year, chosenAt } ou null

    // Dados pessoais controlados
    const [formValues, setFormValues] = useState({
        nome: '',
        sobrenome: '',
        telefone: '',
        email: '',
        cpf: ''
    })

    // Quantidade de cada tipo de ingresso
    const [ticketAmounts, setTicketAmounts] = useState({
        "Ingresso: Inteira": 0,
        "Ingresso: Meia-Entrada": 0
    })

    const calendarLastDate = (month, year) => new Date(year, month + 1, 0).getDate()
    const calendarLastDateVar = calendarLastDate(currentlyMonth, calendarDisplayYear)
    const firstDayOfWeek = new Date(calendarDisplayYear, currentlyMonth, 1).getDay()
    const emptyDays = Array.from({ length: firstDayOfWeek })
    const daysArray = Array.from({ length: calendarLastDateVar }, (_, i) => i + 1)

    const maxSelectableDate = new Date(today)
    maxSelectableDate.setMonth(maxSelectableDate.getMonth() + 3)

    const ticketsTypes = [
        { nome: "Ingresso: Inteira", preco: 150 },
        { nome: "Ingresso: Meia-Entrada", preco: 75 },
    ]
    const mesesNomes = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']

    const totalPrice = ticketsTypes.reduce((total, ticket) => {
        return total + (ticket.preco * (ticketAmounts[ticket.nome] || 0))
    }, 0)

    const handlePrevMonth = () => {
        if (currentlyMonth === 0) {
            setCurrentlyMonth(11)
            setCalendarDisplayYear(calendarDisplayYear - 1)
        } else {
            setCurrentlyMonth(currentlyMonth - 1)
        }
    }

    const handleNextMonth = () => {
        if (currentlyMonth === 11) {
            setCurrentlyMonth(0)
            setCalendarDisplayYear(calendarDisplayYear + 1)
        } else {
            setCurrentlyMonth(currentlyMonth + 1)
        }
    }

    const handleDaySelect = (dayKey, dia) => {
        setSelectedDate(prev => {
            // clicar no mesmo dia de novo desmarca
            if (prev?.dayKey === dayKey) return null
            return {
                dayKey,
                day: dia,
                month: currentlyMonth,
                year: calendarDisplayYear,
                chosenAt: new Date() // horário exato da escolha
            }
        })
    }

    const handleFormChange = (e) => {
        const { name, value } = e.target
        setFormValues(prev => ({ ...prev, [name]: value }))
    }

    const handleTicketAmountChange = (ticketName, delta) => {
        setTicketAmounts(prev => ({
            ...prev,
            [ticketName]: Math.max(0, prev[ticketName] + delta)
        }))
    }

    const submitPurchaseRequest = (finalData) => {
        console.log("Função de envio executada", finalData)
        setDisplayNotification(true)
        // aqui depois entra o fetch/axios pro back-end
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!selectedDate) {
            alert("Escolha uma data para a visita antes de continuar.")
            return
        }

        const totalTickets = Object.values(ticketAmounts).reduce((sum, qty) => sum + qty, 0)
        if (totalTickets === 0) {
            alert("Selecione ao menos um ingresso antes de continuar.")
            return
        }

        const finalData = {
            comprador: formValues,
            ingressos: ticketAmounts,
            dataVisita: selectedDate,
            total: totalPrice,
            enviadoEm: new Date()
        }

        submitPurchaseRequest(finalData)
    }

    const [displayNotification, setDisplayNotification] = useState(false)

    return (<>

        {displayNotification === true ? <Notification   title="Informaçoes salvas com sucesso!" text="Será aberto um novo guia, onde será feito o pagamento. (WIP)" display='true' /> : <></>}

        <HeaderNav headerLogo="/assets/logoZoo.png" />
        <MobileHeader />
        <section className="whiteSection">
            <form className="buyTicketsForm" onSubmit={handleSubmit}>
                <section className="formularioSection">
                <section className="buyTicketsInputContainer">
                    <h1>Comprar Ingressos</h1>
                    <p>Os ingressos adquiridos são válidos exclusivamente para a data selecionada durante a compra. Alterações de data estão sujeitas à disponibilidade e às <Link to={'/termos-e-condicoes'}>políticas vigentes</Link> do ZooBRA.</p>

                    {ticketsTypes.map(ticketType => (
                        <div className="ticketBox" key={ticketType.nome}>
                            <div className="ticketsText">
                                <h2>{ticketType.nome}</h2>
                                <h2>R${ticketType.preco},00</h2>
                            </div>
                            <div className="ticketsAmountInputContainer">
                                <label htmlFor={`ticketsAmount-${ticketType.nome}`}>Quantidade de Ingressos:</label>
                                <div className="ticketsAmountInput">
                                    <input
                                        type="text"
                                        inputMode="numeric"
                                        id={`ticketsAmount-${ticketType.nome}`}
                                        value={ticketAmounts[ticketType.nome]}
                                        readOnly
                                    />
                                    <button
                                        type="button"
                                        onClick={() => handleTicketAmountChange(ticketType.nome, -1)}
                                    >-</button>
                                    <button
                                        type="button"
                                        onClick={() => handleTicketAmountChange(ticketType.nome, 1)}
                                    >+</button>
                                </div>
                            </div>
                        </div>
                    ))}<h2>Total: R${totalPrice},00</h2>

                    <label htmlFor="buyInfoName">Nome
                        <input
                            required
                            className="buyTicketsInput"
                            id="buyInfoName"
                            name="nome"
                            type="text"
                            placeholder="José"
                            value={formValues.nome}
                            onChange={handleFormChange}
                        />
                    </label>
                    <label htmlFor="buyInfoLastName">Sobrenome
                        <input
                            required
                            className="buyTicketsInput"
                            id="buyInfoLastName"
                            name="sobrenome"
                            type="text"
                            placeholder="Ferreira"
                            value={formValues.sobrenome}
                            onChange={handleFormChange}
                        />
                    </label>
                    <label htmlFor="buyInfoTel">Telefone / Celular
                        <input
                            required
                            className="buyTicketsInput"
                            id="buyInfoTel"
                            name="telefone"
                            type="tel"
                            placeholder="11 91234-5678"
                            value={formValues.telefone}
                            onChange={handleFormChange}
                        />
                    </label>
                    <label htmlFor="buyInfoEmail">Email
                        <input
                            required
                            className="buyTicketsInput"
                            id="buyInfoEmail"
                            name="email"
                            type="email"
                            placeholder="nome@gmail.com"
                            value={formValues.email}
                            onChange={handleFormChange}
                        />
                    </label>
                    <label htmlFor="buyInfoCPF">CPF
                        <input
                            required
                            className="buyTicketsInput"
                            id="buyInfoCPF"
                            name="cpf"
                            type="text"
                            placeholder="123.456.789-00"
                            value={formValues.cpf}
                            onChange={handleFormChange}
                        />
                    </label>
                </section>

                <section className="calendarContainer">
                    <div className="calendarioNav">
                        <div className="monthNav">
                            <h2>{calendarDisplayYear}</h2>
                            <button type="button" onClick={handlePrevMonth}>{`<`}</button>
                            <h2>{mesesNomes[currentlyMonth]}</h2>
                            <button type="button" onClick={handleNextMonth}>{`>`}</button>
                        </div>
                    </div>

                    <p className="weekDay">Dom</p>
                    <p className="weekDay">Seg</p>
                    <p className="weekDay">Ter</p>
                    <p className="weekDay">Qua</p>
                    <p className="weekDay">Qui</p>
                    <p className="weekDay">Sex</p>
                    <p className="weekDay">Sab</p>

                    {emptyDays.map((_, i) => (
                        <p key={`empty-${i}`} className="emptyDay"></p>
                    ))}

                    {daysArray.map(dia => {
                        const cellDate = new Date(calendarDisplayYear, currentlyMonth, dia)
                        const isDisabled = cellDate < today || cellDate > maxSelectableDate
                        const dayKey = `${calendarDisplayYear}-${currentlyMonth}-${dia}`

                        return (
                            <label htmlFor={dayKey} key={dayKey} className="calendarDayLabel">
                                {dia}
                                <input
                                    id={dayKey}
                                    type="checkbox"
                                    className="dateCheckBox"
                                    disabled={isDisabled}
                                    checked={selectedDate?.dayKey === dayKey}
                                    onChange={() => handleDaySelect(dayKey, dia)}
                                />
                            </label>
                        )
                    })}
                </section>
</section>
<button type="submit" className="continueBtn">Prosseguir com o pagamento</button>
            </form>
        </section>
        <Footer />
    </>)
}