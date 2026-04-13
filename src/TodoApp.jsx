import { useDispatch, useSelector } from "react-redux"
import { hapusSemua, tambahTugas } from "./todoSlice"
import { useState } from "react"

export default function ChidolistApp() {
    const [list, setList] = useState('') 
    const chidolist = useSelector(state => state.chidolist)
    const dispatch = useDispatch()

    function handleTambah() {
        if (list) {
            dispatch(tambahTugas(list))
            setList('')
        } else {
            alert('Kolom tidak boleh kosong!')
        }
    }
    function handleUbah(e) {
        setList(e.target.value)
    }
    function handleHapusSemua() {
        dispatch(hapusSemua())
    }

    return (
        <>
            <div>
                <span>
                    <input type="text" placeholder="Masukkan tugas" onChange={handleUbah} value={list} />
                    <button onClick={handleTambah}>Tambah Tugas</button>
                </span>
                <button onClick={handleHapusSemua}>Hapus Semua</button>
            </div>
            <ol>
                {chidolist.map((list, index) => (
                    <li key={index}>{list}</li>
                ))}
            </ol>
        </>
    )
}