export const Home = () => {
    // Coloque sua página
    const rootElement = document.createElement('div');
    rootElement.innerHTML = `
        <h2 class="subtitle">Próximas Lives:</h2>
        <div class="conteiner">
            <div class="first-content">
                <div class="first-column">
                    <div class="video-conteiner">
                        <video
                            poster
                            width="640"
                            height="360"
                        ></video>
                    </div>
                </div>
            </div>

            <div class="second-content">
                <div class="second-column">
                    <h2 class="video-title"></h2>
                    <p class="description"></p>
                </div>
            </div>
        </div>
    `;

    console.log(rootElement)
    return rootElement;
  };