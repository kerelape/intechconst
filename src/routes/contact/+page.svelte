<script>
    import Container from "$lib/Container.svelte";
</script>
<Container>
    <div class="content">
        <section class="text">
            <h2>Контакты</h2>
            <address class="office">
                г. Тюмень, ул. Барнаульская, дом 60, офис 16
            </address>
            <h3>Телефон</h3>
            <ul>
                <li>
                    <address class="contact">
                        <a href="tel:+79995489722">+7 (999) 548 97-22</a>
                        <span class="caption">Сергей Спиридонович</span>
                    </address>
                </li>
            </ul>
            <h3>Почта</h3>
            <ul>
                <li>
                    <address class="contact">
                        <a href="mailto:promts72@mail.ru">promts72@mail.ru</a>
                        <span class="caption">По вопросам сотрудничества</span>
                    </address>
                </li>
            </ul>
        </section>
        <section class="map">
            <iframe title="map" src="https://maps.google.com/maps?q=%D0%B3.%20%D0%A2%D1%8E%D0%BC%D0%B5%D0%BD%D1%8C,%20%D1%83%D0%BB.%20%D0%91%D0%B0%D1%80%D0%BD%D0%B0%D1%83%D0%BB%D1%8C%D1%81%D0%BA%D0%B0%D1%8F,%20%D0%B4%D0%BE%D0%BC%2060,%20%D0%BE%D1%84%D0%B8%D1%81%2016&t=&z=13&ie=UTF8&iwloc=&output=embed&hl=ru"></iframe>
        </section>
    </div>
</Container>
<style lang="scss">
    @import "../../sizes.scss";
    @import "../../colors.scss";

    .content {
        height: 100vh;
        padding-top: $header-height + $spacing;
        padding-bottom: $spacing;
        display: flex;

        @media (orientation: portrait) {
            flex-direction: column;
            padding-top: $header-height + $spacing-portrait;
            padding-bottom: $spacing-portrait;
        }
    }

    .map {
        $content-height: calc(100vh - $header-height - $spacing * 2);
        width: $content-height;
        height: $content-height;
        border: solid 2px black;

        iframe {
            border: none;
            height: 100%;
            width: 100%;
        }

        @media (max-width: 880px) {
            width: 100%;
            height: unset;
            flex: 1;
            border: none;
            margin-top: 1rem;
        }
    }

    .text {
        flex: 1;
    }

    ul {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    address.office {
        color: grey;
    }

    address.office, ul {
        margin-top: 0.5rem;
    }

    address.contact {

        .caption {
            color: grey;
        }

        .caption::before {
            content: "— ";
        }
    }

    h3 {
        margin-top: 2rem;
    }
</style>
