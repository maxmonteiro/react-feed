import { Comment } from './Comment'
import styles from './Post.module.css'

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img 
                        className={styles.avatar}
                        src="https://github.com/maxmonteiro.png" 
                    />
                    <div className={styles.authorInfo}>
                        <strong>Máximo Henrique</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time>Publicado em 20 de outubro 2023 às 09:45h</time>
            </header>

            <div className={styles.content}>
                <p>Fala galera</p>

                <p>Acabei de subir mais um projeto no meu portifa!</p>

                <p><a href="">#novoprojeto</a> <a href="">#portfolio</a> <a href="">#react</a></p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea placeholder='Deixe um comentário'
                
                />

                <button type="submit">Publicar</button>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    )
}