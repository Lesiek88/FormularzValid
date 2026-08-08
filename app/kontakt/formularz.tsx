
function Formularz(){
    return (
        <div className = "App">
            <h1>Formularz</h1> <br />
            <form>
                <label htmlFor="">Imie i Nazwisko:
                    <input type="text" />
                </label>
                <br /><br />
                <label htmlFor="">Firma
                    <input type="text" />
                </label>
                <br /><br />
                <label htmlFor="">NIP
                    <input type="text" />
                </label>
                <br /><br />
                <label htmlFor="">Telefon
                    <input type="number" />
                </label>
                <br /><br />
                <label htmlFor="">Budżet <br />
                    <select name="budzet" id="budzet">
                    <option value="p10k">Poniżej 10k</option>
                    <option value="1015k">10-15k</option>
                    <option value="1530k">15-30k</option>
                    <option value="50k">50k+</option>
                    </select>
                </label>
                <br /><br />
                <label htmlFor="">Wiadomość:
                    <input type="text" />
                </label>
                <br /> <br />
                <label htmlFor="">Rodo
                    <input type="text" />
                </label>
                <br /> <br />
                <input type="submit" value="wyślij"/>
                
            </form>
        </div>
    )
}

export default Formularz;