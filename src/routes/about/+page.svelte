<script lang="ts">
    import Container from "$lib/Container.svelte";
    import { onMount } from "svelte";

    onMount(() => {
        const carousels = document.getElementsByClassName("carousel");
        for (const carousel of carousels) {
            const container = carousel.querySelectorAll("ol")[0];
            const slides = container.querySelectorAll("li");
            const it = {
                current: 0,
            };
            setInterval(() => {
                it.current = (it.current + 1) % slides.length;
                container.style.translate = `-${it.current * 100}%`;
            }, 2000);
            for (const slide of slides) {
                slide.addEventListener("click", () => window.open(slide.getElementsByTagName("img")[0].src))
            }
        }
    });
</script>
<Container>
    <div class="content">
        <h2>О нас</h2>
        <p>
            ООО "Промтехстрой" выполнит полный комплекс работ по реконструкции
            и строительству промышленных объектов, в том числе:
        </p>
        <ul>
            <li>Внешние сети электроснабжения 0,4 кВ, 10 кВ (воздушном, кабельном исполнении)</li>
            <li>Трансформаторные подстанции</li>
            <li>Внутриплощадочные сети электроснабжения</li>
            <li>Кабельные трассы</li>
            <li>Освещение территорий, внутриплощадочное освещение</li>
            <li>Внутридомовые сети электроснабжения</li>
            <li>Заземление</li>
            <li>Молниезащита</li>
        </ul>
        <a download href="/intechconst-offer.docx">Коммерческое Предложение</a>
        <section>
            <h3>Опыт работы <sup><a href="#caption-1">1</a></sup></h3>
            <section>
                <h4>Нефтебаза, г. Ишим</h4>
                <details>
                    <summary>Подробнее</summary>
                    <ul>
                        <li>Внешние сети</li>
                        <li>Внутриплощадочные сети</li>
                        <li>Сети автоматизации</li>
                    </ul>
                </details>
                <div class="carousel">
                    <ol>
                        <li>
                            <img src="/figures/ishim-npz0.jpg" alt="Пример работы" />
                        </li>
                        <li>
                            <img src="/figures/ishim-npz1.jpg" alt="Пример работы" />
                        </li>
                        <li>
                            <img src="/figures/ishim-npz2.jpg" alt="Пример работы" />
                        </li>
                        <li>
                            <img src="/figures/ishim-npz3.jpg" alt="Пример работы" />
                        </li>
                        <li>
                            <img src="/figures/ishim-npz4.jpg" alt="Пример работы" />
                        </li>
                        <li>
                            <img src="/figures/ishim-npz5.jpg" alt="Пример работы" />
                        </li>
                    </ol>
                </div>
            </section>
            <section>
                <h4>ООО "Талицкие Молочные Фермы"</h4>
                <details>
                    <summary>Подробнее</summary>
                    <ul>
                        <li>Реконструкция завода</li>
                        <li>Прокладка внешних сетей электроснабжения</li>
                    </ul>
                </details>
                <div class="carousel">
                    <ol>
                        <li>
                            <img src="/figures/talitskie-molochnie-fermy0.jpg" alt="Пример работы" />
                        </li>
                        <li>
                            <img src="/figures/talitskie-molochnie-fermy1.jpg" alt="Пример работы" />
                        </li>
                    </ol>
                </div>
            </section>
            <section>
                <h4>АО "Антипинский НПЗ" — 2, 3 очередь строительства</h4>
                <details>
                    <summary>Подробнее</summary>
                    <ul>
                        <li>Освещение</li>
                        <li>Обогрев</li>
                        <li>Сети автоматизации</li>
                        <li>Молниезащита</li>
                        <li>Заземление</li>
                        <li>Внутриплощадочные сети</li>
                        <li>Внешнее электроснабжение УГП</li>
                    </ul>
                </details>
                <div class="carousel">
                    <ol>
                        <li>
                            <img src="/figures/antipinsky-npz0.jpg" alt="Пример работы" />
                        </li>
                        <li>
                            <img src="/figures/antipinsky-npz1.jpg" alt="Пример работы" />
                        </li>
                    </ol>
                </div>
            </section>
            <section>
                <h4>Администрация Тюменского муниципального района</h4>
                <details>
                    <summary>Подробнее</summary>
                    <ul>
                        <li>ВЛ-10, 0.4 кВт</li>
                        <li>КТП</li>
                        <li>Освещение населенных пунктов</li>
                    </ul>
                </details>
            </section>
            <section>
                <h4>ООО "Полимер" г. Тобольск</h4>
                <details>
                    <summary>Подробнее</summary>
                    <ul>
                        <li>Освещение</li>
                        <li>Обогрев</li>
                        <li>Сети автоматизации</li>
                        <li>Молниезащита</li>
                        <li>Заземление</li>
                        <li>Внутриплощадочные сети</li>
                    </ul>
                </details>
            </section>
            <section>
                <h4>ОАО "Фортум"</h4>
                <details>
                    <summary>Подробнее</summary>
                    <ul>
                        <li>Челябинская ТЭЦ2</li>
                        <li>Тобольская ТЭЦ</li>
                    </ul>
                </details>
            </section>
            <section>
                <h4>ООО "АНПЗ – Продукт"</h4>
                <details>
                    <summary>Подробнее</summary>
                    <ul>
                        <li>Внешние сети электроснабжения</li>
                        <li>Освещение АЗС</li>
                        <li>
                            Электромонтажные работы МАЗС
                            <ul>
                                <li>с. Исетское</li>
                                <li>с. Арамашево</li>
                                <li>с. Малышенка</li>
                                <li>д. Кутарбитка</li>
                                <li>р. П. Голышманово</li>
                                <li>г. Курган</li>
                            </ul>
                        </li>
                        <li>Электромонтажные работы по модернизации АЗС (установка СУГ)</li>
                    </ul>
                </details>
            </section>
            <section>
                <h4>6 км. Старого Тобольского тракта</h4>
                <details>
                    <summary>Подробнее</summary>
                    <ul>
                        <li>д. Патрушева</li>
                        <li>с. Арамашево</li>
                        <li>д. Пиганово</li>
                        <li>д. Кутарбитка</li>
                        <li>с. Ярково</li>
                    </ul>
                </details>
            </section>
            <section>
                <h4>Ямал СПГ — 1, 2 очередь строительства</h4>
                <details>
                    <summary>Подробнее</summary>
                    <ul>
                        <li>Электромонтажные и пусконаладочные работы</li>
                    </ul>
                </details>
            </section>
            <section>
                <span class="caption" id="caption-1">
                    1 — <i>Опыт работы руководителей и основных специалистов ООО "Промтехстрой"</i>
                </span>
            </section>
        </section>
    </div>
</Container>
<style lang="scss">
    @import "../../sizes.scss";
    @import "../../colors.scss";

    .content {
        padding-top: $header-height + $spacing;
        padding-bottom: $spacing;

        @media (orientation: portrait) {
            padding-top: $header-height + $spacing-portrait;
            padding-bottom: $spacing-portrait;
        }
    }

    .carousel {
        max-width: 100%;
        max-height: 70vh;
        overflow: hidden;
        border: solid 1px $contrast;

        ol {
            display: flex;
            padding: 0;
            margin: 0;
            transition: translate 400ms ease-in-out;

            li {
                padding: 0;
                margin: 0;
                display: contents;
                cursor: pointer;
                width: 100%;
                height: 100%;

                img {
                    object-fit: cover;
                }
            }
        }
    }

    ul {
        list-style-type: square;
        margin: 0;

        ul {
            font-size: 0.9em;
        }
    }

    p {
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
    }

    section {
        margin-top: 2rem;
        
        section {
            margin-top: 2rem;
            max-height: 100vh;
        }
    }

    details {
        padding-left: 1rem;
        margin-top: 1rem;
        margin-bottom: 1rem;

        summary {
            color: darkgrey;
            font-size: 0.9rem;
        }
    }

    h4 {
        border-bottom: solid 1px $contrast;
    }

    .caption {
        font-size: 0.8rem;
    }

    h3 {
        sup {
            font-size: 0.7em;
            font-weight: 200;
        }
    }
</style>
