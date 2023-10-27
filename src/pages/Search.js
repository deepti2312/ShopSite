import './Search.css'

export default function Search() {
    return (
        <>
            <div class="search">
                <form className='form'>
                    <input type="text"
                        placeholder="Tap to search"
                        name="search" />
                </form>
            </div>
        </>
    )
}
