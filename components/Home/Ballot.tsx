import React, { useState } from "react"
import { BallotType } from "../../interface/BallotType"
import styles from '../../styles/Ballot.module.css'

type Props = {
    data: BallotType
    onChange(id: string, item: string): void
}

const Ballot: React.FC<Props> = ({ data, onChange }) => {
    const [selectedId, setSelectedId] = useState('')
    const handleChange  = (id: string) => {
        setSelectedId(id)
        onChange(data.id, id)
    }
    return (
        <div>
            <h3 className={styles.title}>{data.title}</h3>
            <div className={styles.row}>
                {data.items.map(item =>
                    <div className={`${styles.item} ${selectedId === item.id ? styles.item__selected: null}`}>
                        <h4 className={styles.item__title}>{item.title}</h4>
                        <img src={item.photoUrL} className={styles.item__photo} alt="photo" />
                        <label className={styles.item__checkbtn}>
                            Vote
                            <input type="checkbox" checked={selectedId === item.id} onChange={() => handleChange(item.id) }/>
                            <span className={styles.item__checkmark}></span>
                        </label>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Ballot