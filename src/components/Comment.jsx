import styles from './Comment.module.css';

import { ThumbsUp, Trash } from 'phosphor-react'

export function Comment() {
    return (
        <div className={styles.comment}>
            <img 
                src="https://github.com/maxmonteiro.png"
            />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Máximo Henrique</strong>
                            <time>publicado em 20 de outubro 2023 às 10:32</time>
                        </div>

                        <button title="Deletar comentário">
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>Muito bom, parabéns</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp size={20} />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}