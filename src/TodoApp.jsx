import { useDispatch, useSelector } from "react-redux"
import { hapusSemua, tambahTugas } from "./todoSlice"

export default function ChidolistApp() {
    const chidolist = useSelector(state => state.chidolist)
    const dispatch = useDispatch()

    function handleTambah() {
        dispatch(tambahTugas('(1) Tugas Baru'))
    }
    function handleHapusSemua() {
        dispatch(hapusSemua())
    }

    return (
        <>
            <ul>
                {chidolist.map((list, index) => (
                    <li key={index}>{list}</li>
                ))}
            </ul>
            <span>
                <button onClick={handleTambah}>Tambah Tugas</button>
                <button onClick={handleHapusSemua}>Hapus Semua</button>
            </span>
        </>
    )
}