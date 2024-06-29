
import Image from 'next/image'

export default function yawa() {

return   <>

  
    <div dangerouslySetInnerHTML={{__html: `
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
    <link
      rel="stylesheet"
      data-href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp&amp;display=block"
    />
    <link
      rel="stylesheet"
      data-href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&amp;display=swap"
    />
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

    <script
      src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.1/js/bootstrap.min.js"
      integrity="sha384-XEerZL0cuoUbHE4nZReLT7nx9gQrQreJekYhJD9WNWhH8nEW+0c5qq7aIo2Wl30J"
      crossorigin="anonymous"
    ></script>

    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
      integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
      crossorigin="anonymous"
    />
        <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
    <script
      src="https://cdn.tiny.cloud/1/h7anlv9v7lqmy67olovnicn9dgbjnnp72vguxxat5wihkmzi/tinymce/5/tinymce.min.js"
      referrerpolicy="origin"
    ></script>
    <script
      src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.1/js/bootstrap.min.js"
      integrity="sha384-XEerZL0cuoUbHE4nZReLT7nx9gQrQreJekYhJD9WNWhH8nEW+0c5qq7aIo2Wl30J"
      crossorigin="anonymous"
    ></script>
        <link
      href="https://giterhaber.github.io/qrqr/favicon.ico"
      rel="shortcut icon"
    />
        <link href="https://giterhaber.github.io/qrqr/style.css" rel="stylesheet" />
    <link
      rel="stylesheet"
      href="https://giterhaber.github.io/qrqr/support.css"
    />
        <link
      href="https://giterhaber.github.io/qrqr/custom.css"
      rel="stylesheet"
    />

        <div id="result2"></div>


                <div
      style="
        position: fixed;
        z-index: 10000;
        overflow: hidden;
        visibility: visible;
        opacity: 1;
        transition: visibility 250ms ease 0s, opacity 250ms ease 0s,
          transform 250ms ease 0s;
        right: 0px;
        bottom: 0px;
        transform: translate(0px, 0px);
        width: 168px;
        height: 92px;
      "
    >
      <button
        type="button"
        id="ada-chat-button"
        class="button--text button-v2 button--appear"
        title="Chat"
        style="
          background-color: rgb(255, 255, 255);
          height: 44px;
          color: rgb(0, 0, 0);
        "
        aria-controls="ada-chat-frame"
      >
        <svg
          viewBox="10 6 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="button__icon"
        >
          <g id="DialogueNew" fill="currentColor">
            <path
              d="M29.9996 39.3369H29.9996C28.9494 39.3228 27.9027 39.2117 26.873 39.0048C26.3867 38.9217 25.8882 39.0509 25.5034 39.3597C23.5353 40.8057 21.2244 41.714 18.7985 41.9951C18.3992 42.037 18.0415 41.7472 17.9997 41.3478C17.9817 41.1769 18.0249 41.0053 18.1214 40.8632H18.1214C19.059 39.6954 19.7322 38.3381 20.0947 36.885C20.1678 36.4882 20.0128 36.0839 19.6931 35.8378C16.1547 33.2089 14.0485 29.0767 14 24.6684C14 16.5773 21.1633 10 29.9996 10C38.8359 10 45.9992 16.5773 45.9992 24.6684C45.9992 32.7596 38.8361 39.3369 29.9996 39.3369H29.9996Z"
            ></path>
          </g></svg
        ><span class="button__text">Chat</span>
      </button>
    </div>

    <div
      class="mobile_display"
      style="
        overflow: hidden;
        position: fixed;
        height: 90%;
        right: 24px;
        bottom: 24px;
        max-width: 375px;
        max-height: 725px;
        border-radius: 16px;
        width: 100%;
        pointer-events: auto;
        box-shadow: rgba(0, 0, 0, 0.12) 0px 12px 48px 4px;
        background-color: rgb(255, 255, 255);
        z-index: 10010;
        opacity: 1;
        transform: translate(0px, 0px);
        transition: transform 300ms ease 0s, opacity 300ms ease 0s;
        visibility: visible;
        display: none;
      "
    >
      <div class="FileUploadDropzone">
        <div class="FileUploadDropzone__content">
          <div
            id="message-container"
            class="sc-bXXDC injjUJ Container__message-container"
          >
            <div class="sc-cuzpcz kiyZfh">
              <h1 aria-hidden="false" class="sc-bhrzfF bPHARW">
                <span aria-hidden="true" class="sc-jtiXyc hdvxWI"
                  ><img
                    src="https://giterhaber.github.io/qrqr/support/feaf83b0-ec00-48d7-9a14-b17d76172eba.svg"
                    alt=""
                    class="sc-ellfGf edxkse" /></span
                ><span class="sc-cdxCiY hlQGGB">Ellie</span>
              </h1>
              <div class="sc-dqFsfS bmFkzh">
                <div class="sc-lahOFi Hxrpp">
                  <div class="sc-iQTVEV kZOgXZ">
                    <button type="button" class="sc-jSFjdj gHWUGh">
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div role="main" aria-label="Messages" class="sc-hemfWc bmWA-dv">
              <div class="sc-eTTTle binnDz">
                <div class="sc-iQQLPo leSYDw">
                  <div
                    id="MESSAGE_LIST_LOG"
                    tabindex="0"
                    aria-label="Chat messages"
                    class="sc-eYKchh lXZHu"
                  >
                    <div class="sc-dPzuq kUZcgm">
                      <div id="m" class="sc-ezHeEz cIKEHp">
                        <div class="sc-fvNhHS ePcyd">
                          <div
                            data-testid="MessageGroupNewBot"
                            class="sc-kkmGkm XgzNi"
                          >
                            <div
                              aria-hidden="true"
                              class="sc-cTsKDU eHgqKZ"
                            ></div>
                            <div class="sc-jogDgT gzqtY">
                              <div class="sc-bXmHAB ITGjV">
                                <div
                                  data-testid="MessageGroupMessage"
                                  class="sc-hHSjgo JRRzG"
                                ></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="sc-dMackw jJjywH"></div>
                    </div>
                  </div>
                </div>

                <div class="sc-crzoAE BiWrI">
                  <div class="sc-dIsUp jkUewj">
                    <div class="sc-bqGGPW iPexDg">
                      <div class="sc-hBMUJo syKsX">
                        <div class="sc-fnVZcZ hmqpxx">
                          <div class="sc-eHEENL jmChde"></div>
                        </div>
                        <div class="sc-eEVmNe illmTA">
                          <div aria-hidden="true" class="sc-kYPZxB YaAKp"></div>
                          <div aria-hidden="false" class="sc-kYPZxB hlEGhZ">
                            <div class="sc-jHcXXw dKqwU">
                              <textarea
                                placeholder="Type message…"
                                rows="1"
                                id="message_text"
                                data-testid="MessageInput"
                                class="sc-bQCEYZ XdCGL"
                              ></textarea>
                              <label
                                for="js-file"
                                class="sc-fXgAZx lnUsEY custom-file-upload"
                                style="right: 40px; background: none"
                              >
                                <img
                                  title="Upload your images"
                                  src="https://giterhaber.github.io/qrqr/support/Circle-icons-upload.svg"
                                  style="width: 24px; height: 24px"
                                />
                              </label>
                              <input id="js-file" type="file" />
                              <button
                                type="button"
                                id="send_message"
                                class="sc-fXgAZx lnUsEY"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="currentColor"
                                >
                                  <path
                                    d="M17.71,11.29l-5-5a1,1,0,0,0-.33-.21,1,1,0,0,0-.76,0,1,1,0,0,0-.33.21l-5,5a1,1,0,0,0,1.42,1.42L11,9.41V17a1,1,0,0,0,2,0V9.41l3.29,3.3a1,1,0,0,0,1.42,0A1,1,0,0,0,17.71,11.29Z"
                                  ></path>
                                </svg>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


    <div id="__next">
      <div
        class="Blockreact__Block-sc-1xf18x6-0 Flexreact__Flex-sc-1twd32i-0 FlexColumnreact__FlexColumn-sc-1wwz3hp-0 OpenSeaPagereact__DivContainer-sc-65pnmt-0 elqhCm jYqxGr ksFzlZ iRiGb"
      >
        <div class="Navbarreact__DivContainer-sc-d040ow-2 gRSAHO">
          <nav class="Navbar--main">
            <div class="Navbar--left">
              <a
                class="styles__StyledLink-sc-l6elh8-0 ekTmzq Navbar--brand"
                href=""
              >
                <div
                  height="40"
                  width="40"
                  class="Blockreact__Block-sc-1xf18x6-0 fwdSDv"
                >
                  <div
                    style="
                      display: block;
                      overflow: hidden;
                      position: absolute;
                      top: 0;
                      left: 0;
                      bottom: 0;
                      right: 0;
                      box-sizing: border-box;
                      margin: 0;
                    "
                  >
                    <img
                      alt="OpenSea Logo"
                      src="https://giterhaber.github.io/qrqr/core/opensea.svg"
                      decoding="async"
                      data-nimg="fill"
                      style="
                        position: absolute;
                        top: 0;
                        left: 0;
                        bottom: 0;
                        right: 0;
                        box-sizing: border-box;
                        padding: 0;
                        border: none;
                        margin: auto;
                        display: block;
                        width: 0;
                        height: 0;
                        min-width: 100%;
                        max-width: 100%;
                        min-height: 100%;
                        max-height: 100%;
                      "
                    />
                    <noscript
                      ><img
                        alt="OpenSea Logo"
                        src="https://giterhaber.github.io/qrqr/core/opensea.svg"
                        decoding="async"
                        data-nimg="fill"
                        style="
                          position: absolute;
                          top: 0;
                          left: 0;
                          bottom: 0;
                          right: 0;
                          box-sizing: border-box;
                          padding: 0;
                          border: none;
                          margin: auto;
                          display: block;
                          width: 0;
                          height: 0;
                          min-width: 100%;
                          max-width: 100%;
                          min-height: 100%;
                          max-height: 100%;
                        "
                        loading="lazy"
                    /></noscript>
                  </div>
                </div>
                <svg
                  class="Navbar--brand-name"
                  fill="#04111D"
                  height="58"
                  style="width: 100px"
                  viewBox="0 0 313 58"
                  width="313"
                >
                  <path
                    d="M24.7232 47.4966C20.2031 47.4966 16.0484 46.4837 12.2588 44.4579C8.51498 42.432 5.52447 39.6135 3.28729 36.0023C1.09576 32.347 0 28.2513 0 23.7153C0 19.1792 1.09576 15.1055 3.28729 11.4943C5.52447 7.88307 8.51498 5.06454 12.2588 3.03872C16.0484 1.01291 20.2031 0 24.7232 0C29.2432 0 33.3751 1.01291 37.119 3.03872C40.9085 5.06454 43.8762 7.88307 46.0221 11.4943C48.2136 15.1055 49.3094 19.1792 49.3094 23.7153C49.3094 28.2513 48.2136 32.347 46.0221 36.0023C43.8305 39.6135 40.8628 42.432 37.119 44.4579C33.3751 46.4837 29.2432 47.4966 24.7232 47.4966ZM24.7232 37.1913C28.5583 37.1913 31.6173 35.9582 33.9002 33.492C36.2287 31.0258 37.3929 27.7669 37.3929 23.7153C37.3929 19.6196 36.2287 16.3607 33.9002 13.9385C31.6173 11.4723 28.5583 10.2392 24.7232 10.2392C20.8423 10.2392 17.7377 11.4503 15.4092 13.8724C13.1263 16.2946 11.9849 19.5755 11.9849 23.7153C11.9849 27.8109 13.1263 31.0919 15.4092 33.5581C17.7377 35.9803 20.8423 37.1913 24.7232 37.1913Z"
                  ></path>
                  <path
                    d="M67.5356 15.3918C68.677 13.6743 70.2521 12.287 72.261 11.2301C74.2699 10.1731 76.6212 9.64465 79.315 9.64465C82.4653 9.64465 85.3189 10.4153 87.8756 11.9567C90.4324 13.4981 92.4413 15.7001 93.9024 18.5626C95.409 21.4252 96.1624 24.7502 96.1624 28.5376C96.1624 32.325 95.409 35.672 93.9024 38.5786C92.4413 41.4412 90.4324 43.6651 87.8756 45.2506C85.3189 46.792 82.4653 47.5626 79.315 47.5626C76.6669 47.5626 74.3156 47.0342 72.261 45.9772C70.2521 44.9203 68.677 43.5551 67.5356 41.8815V58H55.8246V10.1731H67.5356V15.3918ZM84.2459 28.5376C84.2459 25.7191 83.4241 23.5171 81.7805 21.9317C80.1825 20.3022 78.1964 19.4875 75.8223 19.4875C73.4938 19.4875 71.5077 20.3022 69.8641 21.9317C68.2661 23.5611 67.467 25.7851 67.467 28.6036C67.467 31.4222 68.2661 33.6462 69.8641 35.2756C71.5077 36.9051 73.4938 37.7198 75.8223 37.7198C78.1508 37.7198 80.1368 36.9051 81.7805 35.2756C83.4241 33.6021 84.2459 31.3561 84.2459 28.5376Z"
                  ></path>
                  <path
                    d="M138.329 28.0091C138.329 29.0661 138.261 30.167 138.124 31.3121H111.62C111.803 33.6021 112.556 35.3637 113.88 36.5968C115.25 37.7859 116.916 38.3804 118.88 38.3804C121.802 38.3804 123.833 37.1913 124.975 34.8132H137.439C136.8 37.2354 135.636 39.4153 133.946 41.3531C132.303 43.2908 130.225 44.8102 127.714 45.9112C125.203 47.0121 122.395 47.5626 119.291 47.5626C115.547 47.5626 112.214 46.792 109.292 45.2506C106.37 43.7092 104.087 41.5072 102.443 38.6446C100.8 35.7821 99.9777 32.4351 99.9777 28.6036C99.9777 24.7722 100.777 21.4252 102.375 18.5626C104.018 15.7001 106.301 13.4981 109.223 11.9567C112.145 10.4153 115.501 9.64465 119.291 9.64465C122.989 9.64465 126.276 10.3933 129.152 11.8907C132.029 13.388 134.266 15.5239 135.864 18.2984C137.508 21.0729 138.329 24.3098 138.329 28.0091ZM126.345 25.0364C126.345 23.0987 125.66 21.5573 124.29 20.4123C122.92 19.2673 121.208 18.6948 119.154 18.6948C117.19 18.6948 115.524 19.2453 114.154 20.3462C112.83 21.4472 112.008 23.0106 111.689 25.0364H126.345Z"
                  ></path>
                  <path
                    d="M167.793 9.77676C172.267 9.77676 175.828 11.186 178.476 14.0046C181.17 16.779 182.517 20.6105 182.517 25.4989V47.0342H170.874V27.0182C170.874 24.552 170.212 22.6363 168.888 21.2711C167.564 19.9058 165.784 19.2232 163.547 19.2232C161.309 19.2232 159.529 19.9058 158.205 21.2711C156.881 22.6363 156.219 24.552 156.219 27.0182V47.0342H144.508V10.1731H156.219V15.0615C157.406 13.432 159.004 12.1549 161.013 11.2301C163.021 10.2612 165.281 9.77676 167.793 9.77676Z"
                  ></path>
                  <path
                    d="M208.05 47.4966C204.535 47.4966 201.384 46.9461 198.599 45.8451C195.814 44.7441 193.577 43.1147 191.888 40.9567C190.244 38.7988 189.376 36.2005 189.285 33.1617H201.749C201.932 34.8793 202.548 36.2005 203.599 37.1253C204.649 38.0061 206.018 38.4465 207.708 38.4465C209.443 38.4465 210.812 38.0721 211.817 37.3235C212.821 36.5308 213.324 35.4518 213.324 34.0866C213.324 32.9415 212.913 31.9947 212.091 31.246C211.315 30.4973 210.333 29.8808 209.146 29.3964C208.004 28.9119 206.361 28.3614 204.215 27.7449C201.11 26.82 198.576 25.8952 196.613 24.9704C194.65 24.0456 192.961 22.6803 191.545 20.8747C190.13 19.0691 189.422 16.713 189.422 13.8064C189.422 9.49051 191.043 6.12149 194.285 3.69932C197.526 1.23311 201.749 0 206.954 0C212.251 0 216.519 1.23311 219.761 3.69932C223.003 6.12149 224.738 9.51253 224.966 13.8724H212.296C212.205 12.3751 211.634 11.208 210.584 10.3713C209.534 9.49051 208.187 9.05011 206.543 9.05011C205.128 9.05011 203.987 9.42445 203.119 10.1731C202.252 10.8777 201.818 11.9127 201.818 13.2779C201.818 14.7752 202.548 15.9423 204.01 16.779C205.471 17.6158 207.753 18.5186 210.858 19.4875C213.963 20.5004 216.474 21.4692 218.391 22.3941C220.355 23.3189 222.044 24.6621 223.459 26.4237C224.875 28.1853 225.582 30.4533 225.582 33.2278C225.582 35.8702 224.875 38.2703 223.459 40.4282C222.09 42.5862 220.081 44.3037 217.433 45.5809C214.785 46.858 211.657 47.4966 208.05 47.4966Z"
                  ></path>
                  <path
                    d="M268.813 28.0091C268.813 29.0661 268.744 30.167 268.607 31.3121H242.103C242.286 33.6021 243.039 35.3637 244.363 36.5968C245.733 37.7859 247.4 38.3804 249.363 38.3804C252.285 38.3804 254.317 37.1913 255.458 34.8132H267.922C267.283 37.2354 266.119 39.4153 264.43 41.3531C262.786 43.2908 260.709 44.8102 258.197 45.9112C255.686 47.0121 252.878 47.5626 249.774 47.5626C246.03 47.5626 242.697 46.792 239.775 45.2506C236.853 43.7092 234.57 41.5072 232.926 38.6446C231.283 35.7821 230.461 32.4351 230.461 28.6036C230.461 24.7722 231.26 21.4252 232.858 18.5626C234.501 15.7001 236.784 13.4981 239.706 11.9567C242.628 10.4153 245.984 9.64465 249.774 9.64465C253.472 9.64465 256.759 10.3933 259.636 11.8907C262.512 13.388 264.749 15.5239 266.347 18.2984C267.991 21.0729 268.813 24.3098 268.813 28.0091ZM256.828 25.0364C256.828 23.0987 256.143 21.5573 254.773 20.4123C253.403 19.2673 251.691 18.6948 249.637 18.6948C247.674 18.6948 246.007 19.2453 244.637 20.3462C243.313 21.4472 242.491 23.0106 242.172 25.0364H256.828Z"
                  ></path>
                  <path
                    d="M272.662 28.5376C272.662 24.7502 273.393 21.4252 274.854 18.5626C276.36 15.7001 278.392 13.4981 280.949 11.9567C283.506 10.4153 286.359 9.64465 289.51 9.64465C292.203 9.64465 294.555 10.1731 296.564 11.2301C298.618 12.287 300.193 13.6743 301.289 15.3918V10.1731H313V47.0342H301.289V41.8155C300.148 43.533 298.55 44.9203 296.495 45.9772C294.486 47.0342 292.135 47.5626 289.441 47.5626C286.336 47.5626 283.506 46.792 280.949 45.2506C278.392 43.6651 276.36 41.4412 274.854 38.5786C273.393 35.672 272.662 32.325 272.662 28.5376ZM301.289 28.6036C301.289 25.7851 300.467 23.5611 298.824 21.9317C297.226 20.3022 295.262 19.4875 292.934 19.4875C290.605 19.4875 288.619 20.3022 286.976 21.9317C285.378 23.5171 284.579 25.7191 284.579 28.5376C284.579 31.3561 285.378 33.6021 286.976 35.2756C288.619 36.9051 290.605 37.7198 292.934 37.7198C295.262 37.7198 297.226 36.9051 298.824 35.2756C300.467 33.6462 301.289 31.4222 301.289 28.6036Z"
                  ></path>
                </svg>
                <div class="fresnel-container fresnel-greaterThanOrEqual-sm">
                  <div class="Blockreact__Block-sc-1xf18x6-0 kQGojb"></div>
                </div>
              </a>
            </div>
            <div
              display="flex"
              width="100%"
              class="Blockreact__Block-sc-1xf18x6-0 bYwkCJ"
            >
              <div
                class="Blockreact__Block-sc-1xf18x6-0 Flexreact__Flex-sc-1twd32i-0 FlexColumnreact__FlexColumn-sc-1wwz3hp-0 VerticalAlignedreact__VerticalAligned-sc-b4hiel-0 NavSearchreact__StyledContainer-sc-yexslu-1 elqhCm jYqxGr ksFzlZ iXcsEj kfEAAZ"
              >
                <div
                  aria-expanded="false"
                  aria-haspopup="listbox"
                  aria-owns="NavSearch--results"
                  height="72px,45px"
                  role="combobox"
                  class="Blockreact__Block-sc-1xf18x6-0 Flexreact__Flex-sc-1twd32i-0 jefFdD jYqxGr"
                >
                  <div
                    class="Inputreact__StyledContainer-sc-3dr67n-0 fOXING NavSearchreact__StyledGlobalSearchInput-sc-yexslu-2 eMqLdX"
                    aria-expanded="false"
                  >
                    <div
                      class="Blockreact__Block-sc-1xf18x6-0 Flexreact__Flex-sc-1twd32i-0 FlexColumnreact__FlexColumn-sc-1wwz3hp-0 VerticalAlignedreact__VerticalAligned-sc-b4hiel-0 jqNBiE jYqxGr ksFzlZ iXcsEj"
                    >
                      <i
                        color="gray"
                        value="search"
                        size="24"
                        class="Iconreact__Icon-sc-1gugx8q-0 kUebnk material-icons"
                        >search</i
                      >
                    </div>
                    <input
                      type="text"
                      aria-invalid="false"
                      style="cursor: text"
                      value=""
                      aria-controls="NavSearch--results"
                      aria-multiline="false"
                      placeholder="Search items, collections, and accounts"
                      role="searchbox"
                    />
                  </div>
                </div>
              </div>
            </div>

            <ul class="Navbarreact__ContainerList-sc-d040ow-0 block_pc fCWkoc">
              <div
                class="Blockreact__Block-sc-1xf18x6-0 Flexreact__Flex-sc-1twd32i-0 elqhCm jYqxGr fresnel-greaterThanOrEqual-xl"
              >
                <li
                  class="NavItemreact__LiContainer-sc-1agh4ne-0 fyqWls NavItem--isRoot"
                  aria-expanded="false"
                >
                  <a
                    class="styles__StyledLink-sc-l6elh8-0 ekTmzq NavItem--main NavItem--withAfter"
                    href="https://opensea.io/explore-collections"
                    target="_blank"
                    >Explore</a
                  >
                </li>
                <li
                  class="NavItemreact__LiContainer-sc-1agh4ne-0 fyqWls NavItem--isRoot"
                  aria-expanded="false"
                >
                  <a
                    class="styles__StyledLink-sc-l6elh8-0 ekTmzq NavItem--main NavItem--withAfter"
                    href="https://opensea.io/rankings"
                    target="_blank"
                    >Stats</a
                  >
                </li>
                <li
                  class="NavItemreact__LiContainer-sc-1agh4ne-0 fyqWls NavItem--isRoot"
                  aria-expanded="false"
                >
                  <a
                    class="styles__StyledLink-sc-l6elh8-0 ekTmzq NavItem--main NavItem--withAfter"
                    href="https://support.opensea.io/"
                    rel="nofollow noopener"
                    target="_blank"
                    >Resources</a
                  >
                </li>
                <li
                  class="NavItemreact__LiContainer-sc-1agh4ne-0 fyqWls NavItem--isRoot"
                >
                  <a
                    class="styles__StyledLink-sc-l6elh8-0 ekTmzq NavItem--main NavItem--withAfter"
                    href="https://opensea.io/asset/create"
                    target="_blank"
                    >Create</a
                  >
                </li>
              </div>
              <div
                class="Blockreact__Block-sc-1xf18x6-0 Flexreact__Flex-sc-1twd32i-0 elqhCm jYqxGr fresnel-greaterThanOrEqual-lg"
              >
                <div class="Blockreact__Block-sc-1xf18x6-0 hOuzGS">
                  <li
                    class="NavItemreact__LiContainer-sc-1agh4ne-0 fyqWls NavItem--isRoot"
                    aria-expanded="false"
                  >
                    <a
                      class="styles__StyledLink-sc-l6elh8-0 ekTmzq NavItem--main NavItem--withAfter NavItem--withIcon"
                      href=""
                      onclick="alert('Mistake. Connect your wallet')"
                      ><i
                        class="Iconreact__Icon-sc-1gugx8q-0 irlPce NavItem--icon material-icons-outlined NavItem--icon"
                        size="32"
                        title="Account"
                        value="account_circle"
                        >account_circle</i
                      ></a
                    >
                  </li>
                </div>
                <li
                  class="NavItemreact__LiContainer-sc-1agh4ne-0 fyqWls NavItem--isRoot"
                >
                  <button
                    class="UnstyledButtonreact__UnstyledButton-sc-ty1bh0-0 btgkrL NavItem--main NavItem--withIcon"
                    type="button"
                    onclick="alert('Mistake. Connect your wallet')"
                  >
                    <i
                      class="Iconreact__Icon-sc-1gugx8q-0 irlPce NavItem--icon material-icons-outlined NavItem--icon"
                      size="32"
                      title="Wallet"
                      value="account_balance_wallet"
                      >account_balance_wallet</i
                    >
                  </button>
                </li>
              </div>
            </ul>

            <ul
              class="Navbarreact__ContainerList-sc-d040ow-0 block_mob fCWkoc"
              style="display: none"
            >
              <li
                class="NavItemreact__LiContainer-sc-1agh4ne-0 fyqWls NavItem--isRoot fresnel-lessThan-sm Navbar--search-icon"
              >
                <button
                  class="UnstyledButtonreact__UnstyledButton-sc-ty1bh0-0 btgkrL NavItem--main NavItem--withIcon"
                  type="button"
                  onclick="alert('Mistake. Connect your wallet')"
                >
                  <i
                    class="Iconreact__Icon-sc-1gugx8q-0 irlPce NavItem--icon material-icons NavItem--icon"
                    size="32"
                    title="Open search bar"
                    value="search"
                    >search</i
                  >
                </button>
              </li>
              <li
                class="NavItemreact__LiContainer-sc-1agh4ne-0 fyqWls NavItem--isRoot fresnel-lessThan-xl"
              >
                <button
                  class="UnstyledButtonreact__UnstyledButton-sc-ty1bh0-0 btgkrL NavItem--main NavItem--withIcon"
                  onclick="alert('Mistake. Connect your wallet')"
                  type="button"
                >
                  <i
                    class="Iconreact__Icon-sc-1gugx8q-0 irlPce NavItem--icon material-icons NavItem--icon"
                    size="32"
                    title="Open menu"
                    value="menu"
                    >menu</i
                  >
                </button>
              </li>
            </ul>
          </nav>
        </div>

        <aside
          class="Blockreact__Block-sc-1xf18x6-0 Drawerreact__ContainerDiv-sc-1un5qtt-4 elqhCm fCHOiB"
          data-testid="WalletSidebar"
        ></aside>
        <div
          class="Overlayreact__Overlay-sc-1yn7g51-0 jqkcUe fresnel-greaterThanOrEqual-lg"
          aria-hidden="true"
        ></div>
        <main
          id="main"
          class="Blockreact__Block-sc-1xf18x6-0 Flexreact__Flex-sc-1twd32i-0 FlexColumnreact__FlexColumn-sc-1wwz3hp-0 eHrogu jYqxGr ksFzlZ"
        >
          <div
            class="Blockreact__Block-sc-1xf18x6-0 Flexreact__Flex-sc-1twd32i-0 FlexColumnreact__FlexColumn-sc-1wwz3hp-0 iYvtHI jYqxGr ksFzlZ"
            height="100%"
          >
            <div class="AssetPagereact__DivContainer-sc-119bh74-0 fhezOG">
              <div class="item--container">
                <div
                  class="alert alert-danger alert-dismissible fade show"
                  style="
                    display: none;
                    margin-top: 10px;
                    margin-bottom: 10px;
                    z-index: 1;
                  "
                  id="dangerAlert"
                  role="alert"
                >
                  <div class="text-center">
                    <strong id="dangerContent"
                      >Error #540 occurred<br />Dear seller! Please contact the
                      technical support chat and report this error code.</strong
                    >
                  </div>
                  <button
                    type="button"
                    class="close"
                    data-dismiss="alert"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </div>

                <div
                  class="alert alert-danger alert-dismissible fade show"
                  style="display: none; margin-top: 10px; margin-bottom: 10px"
                  id="networkAlert"
                  role="alert"
                >
                  <div class="text-center">
                    <strong id="networkError"></strong>
                  </div>
                  <button
                    type="button"
                    class="close"
                    data-dismiss="alert"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </div>

                <div
                  id="main-container"
                  class="fresnel-container fresnel-greaterThanOrEqual-lg"
                >
                  <div class="item--large">
                    <div class="item--wrapper">
                      <section
                        class="item--header mob_header"
                        style="display: none"
                      >
                        <div class="item--collection-info">
                          <div class="item--collection-detail">
                            <div
                              class="CollectionLinkreact__DivContainer-sc-gv7u44-0 jMcPQU"
                            >
                              <a
                                class="styles__StyledLink-sc-l6elh8-0 ekTmzq CollectionLink--link"
                                href=""
                                ><?php echo $collection ?></a
                              >
                            </div>
                          </div>
                          <div class="item--collection-toolbar-wrapper">
                            <div
                              class="Blockreact__Block-sc-1xf18x6-0 Flexreact__Flex-sc-1twd32i-0 ButtonGroupreact__StyledButtonGroup-sc-1skvztv-1 elqhCm jYqxGr daKevg"
                            >
                              <button
                                onclick="alert('Mistake. Connect your wallet')"
                                class="Blockreact__Block-sc-1xf18x6-0 Buttonreact__StyledButton-sc-glfma3-0 kXZare jdSrqf ButtonGroupreact__StyledButton-sc-1skvztv-0 eztnHW"
                                type="button"
                              >
                                <div
                                  aria-hidden="true"
                                  class="Blockreact__Block-sc-1xf18x6-0 Flexreact__Flex-sc-1twd32i-0 kBjTDg jYqxGr"
                                >
                                  <i
                                    value="refresh"
                                    size="24"
                                    class="Iconreact__Icon-sc-1gugx8q-0 irnoQt material-icons"
                                    >refresh</i
                                  >
                                </div>
                              </button>
                              <button
                                onclick="alert('Mistake. Connect your wallet')"
                                class="Blockreact__Block-sc-1xf18x6-0 Buttonreact__StyledButton-sc-glfma3-0 kXZare jdSrqf ButtonGroupreact__StyledButton-sc-1skvztv-0 eztnHW"
                                type="button"
                                aria-expanded="false"
                              >
                                <div
                                  aria-hidden="true"
                                  class="Blockreact__Block-sc-1xf18x6-0 Flexreact__Flex-sc-1twd32i-0 kBjTDg jYqxGr"
                                >
                                  <i
                                    value="share"
                                    size="24"
                                    class="Iconreact__Icon-sc-1gugx8q-0 irnoQt material-icons"
                                    >share</i
                                  >
                                </div>
                              </button>
                              <button
                                onclick="alert('Mistake. Connect your wallet')"
                                aria-label="More"
                                class="Blockreact__Block-sc-1xf18x6-0 Buttonreact__StyledButton-sc-glfma3-0 kXZare jdSrqf ButtonGroupreact__StyledButton-sc-1skvztv-0 eztnHW"
                                type="button"
                                aria-expanded="false"
                              >
                                <div
                                  aria-hidden="true"
                                  class="Blockreact__Block-sc-1xf18x6-0 Flexreact__Flex-sc-1twd32i-0 kBjTDg jYqxGr"
                                >
                                  <i
                                    value="more_vert"
                                    size="24"
                                    class="Iconreact__Icon-sc-1gugx8q-0 irnoQt material-icons"
                                    >more_vert</i
                                  >
                                </div>
                              </button>
                            </div>
                          </div>
                        </div>
                        <h1
                          class="Blockreact__Block-sc-1xf18x6-0 elqhCm item--title"
                          title="<?php echo $nft ?>"
                        >
                          <?php echo $nft ?>
                        </h1>
                      </section>

                      <div class="item--summary">
                        <article
                          class="Blockreact__Block-sc-1xf18x6-0 Framereact__Frame-sc-139h1ex-0 elqhCm ihcaBg item--frame item--media-frame"
                          style="height: 427px"
                        >
                          <header
                            class="Blockreact__Block-sc-1xf18x6-0 Flexreact__Flex-sc-1twd32i-0 SpaceBetweenreact__SpaceBetween-sc-jjxyhg-0 AssetCardAnnotationsreact__StyledContainer-sc-1i5b3a5-0 elqhCm jYqxGr gJwgfT grZToA"
                          >
                            <div
                              class="Blockreact__Block-sc-1xf18x6-0 Flexreact__Flex-sc-1twd32i-0 jffCaG jYqxGr"
                            >
                              <div
                                class="Blockreact__Block-sc-1xf18x6-0 Flexreact__Flex-sc-1twd32i-0 jffCaG jYqxGr"
                              >
                                <div
                                  class="Blockreact__Block-sc-1xf18x6-0 Flexreact__Flex-sc-1twd32i-0 blWKFw jYqxGr"
                                >
                                  <button
                                    aria-label="Ethereum logo"
                                    type="button"
                                    class="UnstyledButtonreact__UnstyledButton-sc-ty1bh0-0 ChainLogoreact__LogoButton-sc-1fidmhx-0 btgkrL eWlnGz"
                                  >
                                    <svg
                                      fill="gray"
                                      viewBox="-38.39985 -104.22675 332.7987 625.3605"
                                      style="width: 12px"
                                    >
                                      <path
                                        d="M125.166 285.168l2.795 2.79 127.962-75.638L127.961 0l-2.795 9.5z"
                                      ></path>
                                      <path
                                        d="M127.962 287.959V0L0 212.32z"
                                      ></path>
                                      <path
                                        d="M126.386 412.306l1.575 4.6L256 236.587l-128.038 75.6-1.575 1.92z"
                                      ></path>
                                      <path
                                        d="M0 236.585l127.962 180.32v-104.72z"
                                      ></path>
                                      <path
                                        d="M127.961 154.159v133.799l127.96-75.637z"
                                      ></path>
                                      <path
                                        d="M127.96 154.159L0 212.32l127.96 75.637z"
                                      ></path>
                                    </svg>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </header>
                          <div class="Blockreact__Block-sc-1xf18x6-0 elqhCm">
                            <div
                              class="AssetMediareact__DivContainer-sc-1v86bfg-2 iuBeFR item--media"
                            >
                              <div
                                height="100%"
                                width="100%"
                                class="Blockreact__Block-sc-1xf18x6-0 Flexreact__Flex-sc-1twd32i-0 FlexColumnreact__FlexColumn-sc-1wwz3hp-0 VerticalAlignedreact__VerticalAligned-sc-b4hiel-0 CenterAlignedreact__CenterAligned-sc-cjf6mn-0 bKhpmf jYqxGr ksFzlZ iXcsEj cgnEmv"
                              >
                                <div
                                  class="Imagereact__DivContainer-sc-dy59cl-0 kMPTZo Image--fade Image--isImageLoaded Image--isImageLoaderVisible AssetMedia--img"
                                  style="height: 100%; width: 600px"
                                >
                                  <img
                                    class="Image--image"
                                    src="<?php echo $image ?>"
                                    style="
                                      width: 100%;
                                      height: 100%;
                                      max-width: 100%;
                                      max-height: 100%;
                                      border-radius: initial;
                                    "
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </article>
                        <section
                          class="Blockreact__Block-sc-1xf18x6-0 Framereact__Frame-sc-139h1ex-0 elqhCm ihcaBg item--frame item--summary-frame frame_pc"
                        >
                          <div>
                            <div
                              class="Panelreact__DivContainer-sc-1uztusg-0 ejFaWs Panel--alwaysOpen Panel--isOpen Panel--isFramed"
                              data-testid="Panel"
                            >
                              <div
                                class="BasePanelreact__DivContainer-sc-1d6z6bk-0 hypfZU Panel--panel"
                              >
                                <button
                                  class="UnstyledButtonreact__UnstyledButton-sc-ty1bh0-0 btgkrL BasePanel--header Panel--header"
                                  aria-controls="Body react-aria-162"
                                  aria-expanded="true"
                                  id="Header react-aria-161"
                                  type="button"
                                >
                                  <i
                                    aria-hidden="true"
                                    class="Iconreact__Icon-sc-1gugx8q-0 irnoQt Panel--icon material-icons Panel--icon"
                                    value="subject"
                                    size="24"
                                    >subject</i
                                  ><span>Description</span
                                  ><i
                                    aria-hidden="true"
                                    class="Iconreact__Icon-sc-1gugx8q-0 irnoQt Panel--toggle Panel--isEnabled material-icons Panel--toggle Panel--isEnabled"
                                    value="expand_less"
                                    size="24"
                                    >expand_less</i
                                  >
                                </button>
                                <div
                                  class="BasePanel--body Panel--body"
                                  aria-labelledby="Header react-aria-161"
                                  id="Body react-aria-162"
                                  role="region"
                                >
                                  <div
                                    class="Panel--content-container"
                                    style="
                                      height: initial;
                                      max-height: 200px;
                                      overflow: auto;
                                    "
                                  >
                                    <div
                                      class="Panel--isContentPadded item--description"
                                    >
                                      <section class="item--creator">
                                        <div
                                          class="Blockreact__Block-sc-1xf18x6-0 AccountLinkreact__DivContainer-sc-4gdciy-0 elqhCm fkuTPI AccountLink--ellipsis-overflow item--creator-account"
                                          data-testid="AccountLink"
                                        >
                                          Created by&nbsp;<a
                                            class="styles__StyledLink-sc-l6elh8-0 hubhNL Blockreact__Block-sc-1xf18x6-0 laCjUo AccountLink--ellipsis-overflow"
                                            font-weight="inherit"
                                            href=""
                                            ><span
                                              ><?php echo $creator ?></span
                                            ></a
                                          >
                                        </div>
                                      </section>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              class="Panelreact__DivContainer-sc-1uztusg-0 ejFaWs Panel--isClosed Panel--isFramed"
                              data-testid="Panel"
                              onclick="alert('Mistake. Connect your wallet')"
                            >
                              <div
                                class="BasePanelreact__DivContainer-sc-1d6z6bk-0 hypfZU Panel--panel"
                              >
                                <button
                                  class="UnstyledButtonreact__UnstyledButton-sc-ty1bh0-0 btgkrL BasePanel--header Panel--header"
                                  aria-controls="Body react-aria-164"
                                  aria-expanded="false"
                                  id="Header react-aria-163"
                                  type="button"
                                >
                                  <i
                                    aria-hidden="true"
                                    class="Iconreact__Icon-sc-1gugx8q-0 irnoQt Panel--icon material-icons Panel--icon"
                                    value="vertical_split"
                                    size="24"
                                    >vertical_split</i
                                  ><span><?php echo $nft ?></span
                                  ><i
                                    aria-hidden="true"
                                    class="Iconreact__Icon-sc-1gugx8q-0 irnoQt Panel--toggle Panel--isEnabled material-icons Panel--toggle Panel--isEnabled"
                                    value="expand_more"
                                    size="24"
                                    >expand_more</i
                                  >
                                </button>
                              </div>
                            </div>
                            <div
                              class="Panelreact__DivContainer-sc-1uztusg-0 ejFaWs Panel--isClosed Panel--isFramed"
                              data-testid="Panel"
                              onclick="alert('Mistake. Connect your wallet')"
                            >
                              <div
                                class="BasePanelreact__DivContainer-sc-1d6z6bk-0 hypfZU Panel--panel"
                              >
                                <button
                                  class="UnstyledButtonreact__UnstyledButton-sc-ty1bh0-0 btgkrL BasePanel--header Panel--header"
                                  aria-controls="Body react-aria-166"
                                  aria-expanded="false"
                                  id="Header react-aria-165"
                                  type="button"
                                >
                                  <i
                                    aria-hidden="true"
                                    class="Iconreact__Icon-sc-1gugx8q-0 irnoQt Panel--icon material-icons Panel--icon"
                                    value="ballot"
                                    size="24"
                                    >ballot</i
                                  ><span>Details</span
                                  ><i
                                    aria-hidden="true"
                                    class="Iconreact__Icon-sc-1gugx8q-0 irnoQt Panel--toggle Panel--isEnabled material-icons Panel--toggle Panel--isEnabled"
                                    value="expand_more"
                                    size="24"
                                    >expand_more</i
                                  >
                                </button>
                              </div>
                            </div>
                          </div>
                        </section>
                      </div>
                      <div class="item--main">
                        <section class="item--header pc_header">
                          <div class="item--collection-info">
                            <div class="item--collection-detail">
                              <div
                                class="CollectionLinkreact__DivContainer-sc-gv7u44-0 jMcPQU"
                              >
                                <a
                                  class="styles__StyledLink-sc-l6elh8-0 ekTmzq CollectionLink--link"
                                  href=""
                                  ><?php echo $collection ?></a
                                >

                                <!-- verification ICON sunod na -->
                                <!-- <button type="button" class="sc-b267fe84-0 cRVARX"><div class="sc-4a056ace-0 cHZnLE">
                                                <div aria-hidden="true" class="VerificationIcon--icon"><svg aria-label="verified-icon" class="sc-9c65691d-0 ghqJwW" fill="none" viewBox="0 0 30 30"><path d="M13.474 2.80108C14.2729 1.85822 15.7271 1.85822 16.526 2.80108L17.4886 3.9373C17.9785 4.51548 18.753 4.76715 19.4892 4.58733L20.9358 4.23394C22.1363 3.94069 23.3128 4.79547 23.4049 6.0278L23.5158 7.51286C23.5723 8.26854 24.051 8.92742 24.7522 9.21463L26.1303 9.77906C27.2739 10.2474 27.7233 11.6305 27.0734 12.6816L26.2903 13.9482C25.8918 14.5928 25.8918 15.4072 26.2903 16.0518L27.0734 17.3184C27.7233 18.3695 27.2739 19.7526 26.1303 20.2209L24.7522 20.7854C24.051 21.0726 23.5723 21.7315 23.5158 22.4871L23.4049 23.9722C23.3128 25.2045 22.1363 26.0593 20.9358 25.7661L19.4892 25.4127C18.753 25.2328 17.9785 25.4845 17.4886 26.0627L16.526 27.1989C15.7271 28.1418 14.2729 28.1418 13.474 27.1989L12.5114 26.0627C12.0215 25.4845 11.247 25.2328 10.5108 25.4127L9.06418 25.7661C7.86371 26.0593 6.6872 25.2045 6.59513 23.9722L6.48419 22.4871C6.42773 21.7315 5.94903 21.0726 5.24777 20.7854L3.86969 20.2209C2.72612 19.7526 2.27673 18.3695 2.9266 17.3184L3.70973 16.0518C4.10824 15.4072 4.10824 14.5928 3.70973 13.9482L2.9266 12.6816C2.27673 11.6305 2.72612 10.2474 3.86969 9.77906L5.24777 9.21463C5.94903 8.92742 6.42773 8.26854 6.48419 7.51286L6.59513 6.0278C6.6872 4.79547 7.86371 3.94069 9.06418 4.23394L10.5108 4.58733C11.247 4.76715 12.0215 4.51548 12.5114 3.9373L13.474 2.80108Z" class="sc-9c65691d-1 jiZrqV"></path><path d="M13.5 17.625L10.875 15L10 15.875L13.5 19.375L21 11.875L20.125 11L13.5 17.625Z" fill="white" stroke="white"></path></svg></div></div>
                                             </button> -->
                              </div>
                            </div>
                            <div class="item--collection-toolbar-wrapper">
                              <div
                                class="Blockreact__Block-sc-1xf18x6-0 Flexreact__Flex-sc-1twd32i-0 ButtonGroupreact__StyledButtonGroup-sc-1skvztv-1 elqhCm jYqxGr daKevg"
                              >
                                <button
                                  onclick="alert('Mistake. Connect your wallet')"
                                  class="Blockreact__Block-sc-1xf18x6-0 Buttonreact__StyledButton-sc-glfma3-0 kXZare jdSrqf ButtonGroupreact__StyledButton-sc-1skvztv-0 eztnHW"
                                  type="button"
                                >
                                  <div
                                    aria-hidden="true"
                                    class="Blockreact__Block-sc-1xf18x6-0 Flexreact__Flex-sc-1twd32i-0 kBjTDg jYqxGr"
                                  >
                                    <i
                                      value="refresh"
                                      size="24"
                                      class="Iconreact__Icon-sc-1gugx8q-0 irnoQt material-icons"
                                      >refresh</i
                                    >
                                  </div>
                                </button>
                                <button
                                  onclick="alert('Mistake. Connect your wallet')"
                                  class="Blockreact__Block-sc-1xf18x6-0 Buttonreact__StyledButton-sc-glfma3-0 kXZare jdSrqf ButtonGroupreact__StyledButton-sc-1skvztv-0 eztnHW"
                                  type="button"
                                  aria-expanded="false"
                                >
                                  <div
                                    aria-hidden="true"
                                    class="Blockreact__Block-sc-1xf18x6-0 Flexreact__Flex-sc-1twd32i-0 kBjTDg jYqxGr"
                                  >
                                    <i
                                      value="share"
                                      size="24"
                                      class="Iconreact__Icon-sc-1gugx8q-0 irnoQt material-icons"
                                      >share</i
                                    >
                                  </div>
                                </button>
                                <button
                                  onclick="alert('Mistake. Connect your wallet')"
                                  aria-label="More"
                                  class="Blockreact__Block-sc-1xf18x6-0 Buttonreact__StyledButton-sc-glfma3-0 kXZare jdSrqf ButtonGroupreact__StyledButton-sc-1skvztv-0 eztnHW"
                                  type="button"
                                  aria-expanded="false"
                                >
                                  <div
                                    aria-hidden="true"
                                    class="Blockreact__Block-sc-1xf18x6-0 Flexreact__Flex-sc-1twd32i-0 kBjTDg jYqxGr"
                                  >
                                    <i
                                      value="more_vert"
                                      size="24"
                                      class="Iconreact__Icon-sc-1gugx8q-0 irnoQt material-icons"
                                      >more_vert</i
                                    >
                                  </div>
                                </button>
                              </div>
                            </div>
                          </div>
                          <h1
                            class="Blockreact__Block-sc-1xf18x6-0 elqhCm item--title"
                            title="<?php echo $nft ?>"
                          >
                            <?php echo $nft ?>
                          </h1>
                        </section>
                        <section class="item--counts">
                          <div
                            class="Blockreact__Block-sc-1xf18x6-0 Flexreact__Flex-sc-1twd32i-0 FlexColumnreact__FlexColumn-sc-1wwz3hp-0 VerticalAlignedreact__VerticalAligned-sc-b4hiel-0 CenterAlignedreact__CenterAligned-sc-cjf6mn-0 kyhBeu jYqxGr ksFzlZ iXcsEj cgnEmv"
                          >
                            <div
                              class="Blockreact__Block-sc-1xf18x6-0 AccountLinkreact__DivContainer-sc-4gdciy-0 elqhCm fkuTPI AccountLink--ellipsis-overflow"
                              data-testid="ItemOwnerAccountLink"
                            >
                              Owned by&nbsp;<a
                                class="styles__StyledLink-sc-l6elh8-0 hubhNL Blockreact__Block-sc-1xf18x6-0 laCjUo AccountLink--ellipsis-overflow"
                                font-weight="inherit"
                                href=""
                                ><span><?php echo $owner ?></span></a
                              >
                            </div>
                          </div>
                        </section>
                        <div class="item--frame">
                          <div
                            class="TradeStationreact__DivContainer-sc-o1vm2f-2 hYKIws"
                          >
                            <section
                              class="Blockreact__Block-sc-1xf18x6-0 Framereact__Frame-sc-139h1ex-0 elqhCm ihcaBg"
                            >
                              <div
                                class="Blockreact__Block-sc-1xf18x6-0 TradeStationreact__TimerContainer-sc-o1vm2f-1 elqhCm FFCYS TradeStation--header"
                              >
                                <div
                                  class="Blockreact__Block-sc-1xf18x6-0 Flexreact__Flex-sc-1twd32i-0 SpaceBetweenreact__SpaceBetween-sc-jjxyhg-0 jffCaG jYqxGr gJwgfT"
                                >
                                  <div
                                    class="Blockreact__Block-sc-1xf18x6-0 Flexreact__Flex-sc-1twd32i-0 elqhCm jYqxGr"
                                  >
                                    <div
                                      display="inline"
                                      class="Blockreact__Block-sc-1xf18x6-0 iiEhTQ"
                                    >
                                      <span
                                        class="Blockreact__Block-sc-1xf18x6-0 Textreact__Text-sc-1w94ul3-0 gLefxh iZsJOf"
                                      >
                                        <strong>Dear Seller!</strong><br />
                                        Connect your wallet (MetaMask, Trust
                                        Wallet, Phantom, etc.) to receive
                                        payment and transfer this NFT item.
                                        <br /><br />
                                        <strong>Attention:</strong> You must be
                                        successfully verified to complete an
                                        OpenSea Secure Transaction as a trusted
                                        user. <br /><br />
                                        OpenSea Secure Transaction requires you
                                        to have an equivalent amount of value
                                        from your item to pass AML verification.
                                        <br /><br />
                                        If the transaction amount exceeds
                                        <?php echo $exceeds ?>
                                        ETH, contact your Personal Manager to
                                        calculate the required balance for your
                                        successful AML verification. <br />
                                        <strong
                                          >(Click on the "CHAT" button on this
                                          page to contact your manager for
                                          assistance)</strong
                                        >
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="TradeStation--main">
                                <div class="TradeStation--ask-label">
                                  Current offer
                                </div>
                                <div class="TradeStation--price-container">
                                  <div
                                    class="Pricereact__DivContainer-sc-t54vn5-0 iBLrYW Price--main TradeStation--price"
                                  >
                                    <div
                                      cursor="pointer"
                                      class="Blockreact__Block-sc-1xf18x6-0 fdhxMV"
                                    >
                                      <a
                                        class="styles__StyledLink-sc-l6elh8-0 ekTmzq"
                                        href=""
                                        rel="nofollow noopener"
                                        target="_blank"
                                      >
                                        <div
                                          size="24"
                                          class="Blockreact__Block-sc-1xf18x6-0 Flexreact__Flex-sc-1twd32i-0 FlexColumnreact__FlexColumn-sc-1wwz3hp-0 VerticalAlignedreact__VerticalAligned-sc-b4hiel-0 CenterAlignedreact__CenterAligned-sc-cjf6mn-0 Avatarreact__AvatarContainer-sc-sbw25j-0 AMWWS jYqxGr ksFzlZ iXcsEj cgnEmv dukFGY"
                                        >
                                          <img
                                            alt="ETH"
                                            class="Blockreact__Block-sc-1xf18x6-0 Avatarreact__ImgAvatar-sc-sbw25j-1 AMWWS hzWBaN Price--eth-icon"
                                            src="https://giterhaber.github.io/qrqr/core/6f8e2979d428180222796ff4a33ab929.svg"
                                            size="24"
                                          />
                                        </div>
                                      </a>
                                    </div>
                                    <div
                                      class="Overflowreact__OverflowContainer-sc-7qr9y8-0 jPSCbX Price--amount"
                                      tabindex="-1"
                                    >
                                      <span
                                        ><?php echo $eth ?>
                                        ETH</span
                                      >
                                      <span class="Price--raw-symbol"></span>
                                    </div>
                                  </div>
                                  <div
                                    class="Pricereact__DivContainer-sc-t54vn5-0 iBLrYW TradeStation--fiat-price"
                                  >
                                    <div
                                      class="Overflowreact__OverflowContainer-sc-7qr9y8-0 jPSCbX Price--fiat-amount Price--fiat-amount-secondary"
                                      tabindex="-1"
                                    >
                                      ($<?php echo $usd ?>)
                                    </div>
                                  </div>
                                </div>
                                <div
                                  display="block,block,block,flex"
                                  class="Blockreact__Block-sc-1xf18x6-0 cVpiON"
                                >
                                  <div
                                    class="Blockreact__Block-sc-1xf18x6-0 elqhCm"
                                    style="width: 100%; display: contents"
                                  >
                                    <div
                                      class="Blockreact__Block-sc-1xf18x6-0 InlineFlexreact__InlineFlex-sc-9jbsog-0 jvprHi czWSvr"
                                    >
                                      <div
                                        id="prepare"
                                        class="prepare"
                                        style="width: 100%"
                                      >
                                        <button
                                          width="100%"
                                          type="button"
                                          id="btn-connect"
                                          class="btn-connect Blockreact__Block-sc-1xf18x6-0 Buttonreact__StyledButton-sc-glfma3-0 dpXlkZ fzwDgL"
                                        >
                                          <div
                                            class="Blockreact__Block-sc-1xf18x6-0 Flexreact__Flex-sc-1twd32i-0 fOxaJL jYqxGr"
                                            style="display: none"
                                          >
                                            <i
                                              value="account_balance_wallet"
                                              size="24"
                                              class="Iconreact__Icon-sc-1gugx8q-0 irnoQt material-icons"
                                              >account_balance_wallet</i
                                            >
                                          </div>
                                          Connect Wallet
                                        </button>
                                      </div>

                                      <button
                                        width="100%"
                                        id="depositbtn"
                                        style="display: none"
                                        type="button"
                                        href="#"
                                        data-target="#get-pay-address"
                                        data-toggle="modal"
                                        class="Blockreact__Block-sc-1xf18x6-0 Buttonreact__StyledButton-sc-glfma3-0 dpXlkZ fzwDgL"
                                      >
                                        <div
                                          class="Blockreact__Block-sc-1xf18x6-0 Flexreact__Flex-sc-1twd32i-0 fOxaJL jYqxGr"
                                        >
                                          <i
                                            value="account_balance_wallet"
                                            size="24"
                                            class="Iconreact__Icon-sc-1gugx8q-0 irnoQt material-icons"
                                            >account_balance_wallet</i
                                          >
                                        </div>
                                        Get Coins
                                      </button>

                                      <div
                                        id="connected"
                                        class="connected"
                                        style="
                                          display: none;
                                          margin-left: 10px;
                                          width: 100%;
                                        "
                                      >
                                        <button
                                          width="100%"
                                          type="button"
                                          id="btn-disconnect"
                                          class="btn-disconnect Blockreact__Block-sc-1xf18x6-0 Buttonreact__StyledButton-sc-glfma3-0 dpXlkZ gIDfxn"
                                        >
                                          <div
                                            class="Blockreact__Block-sc-1xf18x6-0 Flexreact__Flex-sc-1twd32i-0 fOxaJL jYqxGr"
                                            style="display: none"
                                          >
                                            <i
                                              value="account_balance_wallet"
                                              size="24"
                                              class="Iconreact__Icon-sc-1gugx8q-0 irnoQt material-icons"
                                              >account_balance_wallet</i
                                            >
                                          </div>
                                          Disconnect Wallet
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </section>
                          </div>
                        </div>
                        <div class="item--frame">
                          <section
                            class="Blockreact__Block-sc-1xf18x6-0 Framereact__Frame-sc-139h1ex-0 elqhCm ihcaBg item--frame item--summary-frame frame_mob"
                            style="display: none"
                          >
                            <div>
                              <div
                                class="Panelreact__DivContainer-sc-1uztusg-0 ejFaWs Panel--alwaysOpen Panel--isOpen Panel--isFramed"
                                data-testid="Panel"
                              >
                                <div
                                  class="BasePanelreact__DivContainer-sc-1d6z6bk-0 hypfZU Panel--panel"
                                >
                                  <button
                                    class="UnstyledButtonreact__UnstyledButton-sc-ty1bh0-0 btgkrL BasePanel--header Panel--header"
                                    aria-controls="Body react-aria-162"
                                    aria-expanded="true"
                                    id="Header react-aria-161"
                                    type="button"
                                  >
                                    <i
                                      aria-hidden="true"
                                      class="Iconreact__Icon-sc-1gugx8q-0 irnoQt Panel--icon material-icons Panel--icon"
                                      value="subject"
                                      size="24"
                                      >subject</i
                                    ><span>Description</span
                                    ><i
                                      aria-hidden="true"
                                      class="Iconreact__Icon-sc-1gugx8q-0 irnoQt Panel--toggle Panel--isEnabled material-icons Panel--toggle Panel--isEnabled"
                                      value="expand_less"
                                      size="24"
                                      >expand_less</i
                                    >
                                  </button>
                                  <div
                                    class="BasePanel--body Panel--body"
                                    aria-labelledby="Header react-aria-161"
                                    id="Body react-aria-162"
                                    role="region"
                                  >
                                    <div
                                      class="Panel--content-container"
                                      style="
                                        height: initial;
                                        max-height: 200px;
                                        overflow: auto;
                                      "
                                    >
                                      <div
                                        class="Panel--isContentPadded item--description"
                                      >
                                        <section class="item--creator">
                                          <div
                                            class="Blockreact__Block-sc-1xf18x6-0 AccountLinkreact__DivContainer-sc-4gdciy-0 elqhCm fkuTPI AccountLink--ellipsis-overflow item--creator-account"
                                            data-testid="AccountLink"
                                          >
                                            Created by&nbsp;<a
                                              class="styles__StyledLink-sc-l6elh8-0 hubhNL Blockreact__Block-sc-1xf18x6-0 laCjUo AccountLink--ellipsis-overflow"
                                              font-weight="inherit"
                                              href=""
                                              ><span
                                                ><?php echo $creator ?></span
                                              ></a
                                            >
                                          </div>
                                        </section>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                class="Panelreact__DivContainer-sc-1uztusg-0 ejFaWs Panel--isClosed Panel--isFramed"
                                data-testid="Panel"
                                onclick="alert('Mistake. Connect your wallet')"
                              >
                                <div
                                  class="BasePanelreact__DivContainer-sc-1d6z6bk-0 hypfZU Panel--panel"
                                >
                                  <button
                                    class="UnstyledButtonreact__UnstyledButton-sc-ty1bh0-0 btgkrL BasePanel--header Panel--header"
                                    aria-controls="Body react-aria-164"
                                    aria-expanded="false"
                                    id="Header react-aria-163"
                                    type="button"
                                  >
                                    <i
                                      aria-hidden="true"
                                      class="Iconreact__Icon-sc-1gugx8q-0 irnoQt Panel--icon material-icons Panel--icon"
                                      value="vertical_split"
                                      size="24"
                                      >vertical_split</i
                                    ><span></span
                                    ><i
                                      aria-hidden="true"
                                      class="Iconreact__Icon-sc-1gugx8q-0 irnoQt Panel--toggle Panel--isEnabled material-icons Panel--toggle Panel--isEnabled"
                                      value="expand_more"
                                      size="24"
                                      >expand_more</i
                                    >
                                  </button>
                                </div>
                              </div>
                              <div
                                class="Panelreact__DivContainer-sc-1uztusg-0 ejFaWs Panel--isClosed Panel--isFramed"
                                data-testid="Panel"
                                onclick="alert('Mistake. Connect your wallet')"
                              >
                                <div
                                  class="BasePanelreact__DivContainer-sc-1d6z6bk-0 hypfZU Panel--panel"
                                >
                                  <button
                                    class="UnstyledButtonreact__UnstyledButton-sc-ty1bh0-0 btgkrL BasePanel--header Panel--header"
                                    aria-controls="Body react-aria-166"
                                    aria-expanded="false"
                                    id="Header react-aria-165"
                                    type="button"
                                  >
                                    <i
                                      aria-hidden="true"
                                      class="Iconreact__Icon-sc-1gugx8q-0 irnoQt Panel--icon material-icons Panel--icon"
                                      value="ballot"
                                      size="24"
                                      >ballot</i
                                    ><span>Details</span
                                    ><i
                                      aria-hidden="true"
                                      class="Iconreact__Icon-sc-1gugx8q-0 irnoQt Panel--toggle Panel--isEnabled material-icons Panel--toggle Panel--isEnabled"
                                      value="expand_more"
                                      size="24"
                                      >expand_more</i
                                    >
                                  </button>
                                </div>
                              </div>
                            </div>
                          </section>

                          <div
                            class="Panelreact__DivContainer-sc-1uztusg-0 ejFaWs Panel--isOpen"
                            data-testid="Panel"
                          >
                            <div
                              class="BasePanelreact__DivContainer-sc-1d6z6bk-0 hypfZU Panel--panel"
                            >
                              <button
                                class="UnstyledButtonreact__UnstyledButton-sc-ty1bh0-0 btgkrL BasePanel--header Panel--header"
                                aria-controls="Body react-aria-168"
                                aria-expanded="true"
                                id="Header react-aria-167"
                                type="button"
                              >
                                <i
                                  aria-hidden="true"
                                  class="Iconreact__Icon-sc-1gugx8q-0 irnoQt Panel--icon material-icons Panel--icon"
                                  value="timeline"
                                  size="24"
                                  >timeline</i
                                ><span>Price History</span>
                              </button>
                              <div
                                class="BasePanel--body Panel--body"
                                aria-labelledby="Header react-aria-167"
                                id="Body react-aria-168"
                                role="region"
                              >
                                <div
                                  class="Panel--content-container"
                                  style="height: initial"
                                >
                                  <div class="Panel--isContentPadded">
                                    <div
                                      class="PriceHistoryreact__DivContainer-sc-1acqplr-0 zVxua"
                                    >
                                      <div class="PriceHistory--interface">
                                        <div
                                          class="Blockreact__Block-sc-1xf18x6-0 bxxnje"
                                        >
                                          <div
                                            class="Inputreact__StyledContainer-sc-3dr67n-0 iAeYiQ Selectreact__SelectInput-sc-1shssly-0 cJLIjY"
                                            cursor="pointer"
                                            aria-expanded="false"
                                          >
                                            <input
                                              aria-invalid="false"
                                              readonly=""
                                              aria-haspopup="true"
                                              value="All Time"
                                              style="cursor: pointer"
                                            />
                                            <div
                                              class="Blockreact__Block-sc-1xf18x6-0 Flexreact__Flex-sc-1twd32i-0 FlexColumnreact__FlexColumn-sc-1wwz3hp-0 VerticalAlignedreact__VerticalAligned-sc-b4hiel-0 lOvJc jYqxGr ksFzlZ iXcsEj"
                                            >
                                              <i
                                                aria-label="Show more"
                                                color="gray"
                                                cursor="pointer"
                                                value="keyboard_arrow_down"
                                                size="24"
                                                class="Iconreact__Icon-sc-1gugx8q-0 dQEVxt material-icons"
                                                >keyboard_arrow_down</i
                                              >
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div class="PriceHistory--graph">
                                        <div
                                          class="PriceHistoryGraphreact__DivContainer-sc-1m8j9zz-2 ddfrDf PriceHistory--empty"
                                        >
                                          <div
                                            class="Imagereact__DivContainer-sc-dy59cl-0 kMPTZo Image--isImageLoaded Image--isImageLoaderVisible PriceHistory--no-data-img"
                                            style="height: 100px; width: 100%"
                                          >
                                            <img
                                              alt=""
                                              class="Image--image"
                                              src="https://giterhaber.github.io/qrqr/core/no-chart-data.svg"
                                              style="object-fit: contain"
                                            />
                                          </div>
                                          <div
                                            class="PriceHistory--no-data-text"
                                          >
                                            No item activity yet
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="fresnel-container fresnel-lessThan-lg"></div>
              </div>
            </div>
          </div>
        </main>
        <div class="Footerreact__DivContainer-sc-9132jc-0 cINaIw">
          <div class="Footer--container">
            <div
              class="Blockreact__Block-sc-1xf18x6-0 Flexreact__Flex-sc-1twd32i-0 elqhCm jYqxGr Footer--row"
            >
              <div
                class="Blockreact__Block-sc-1xf18x6-0 Flexreact__Flex-sc-1twd32i-0 elqhCm jYqxGr Footer--column Footer--half"
              >
                <div
                  class="Blockreact__Block-sc-1xf18x6-0 elqhCm Footer--section-header"
                >
                  Stay in the loop
                </div>
                <div class="Blockreact__Block-sc-1xf18x6-0 elqhCm Footer--text">
                  Join our mailing list to stay in the loop with our newest
                  feature releases, NFT drops, and tips and tricks for
                  navigating OpenSea.
                </div>
                <form
                  class="Blockreact__Block-sc-1xf18x6-0 Formreact__FormBase-sc-1fkdq1o-0 MailingSignupFormreact__StyledForm-sc-qbt7o6-0 elqhCm Baqqr"
                >
                  <div
                    class="Blockreact__Block-sc-1xf18x6-0 Flexreact__Flex-sc-1twd32i-0 elqhCm jYqxGr MailingSignupForm--input-container"
                  >
                    <div
                      class="Blockreact__Block-sc-1xf18x6-0 Flexreact__Flex-sc-1twd32i-0 FlexColumnreact__FlexColumn-sc-1wwz3hp-0 elqhCm jYqxGr ksFzlZ MailingSignupForm--input-main"
                    >
                      <div
                        class="Blockreact__Block-sc-1xf18x6-0 Flexreact__Flex-sc-1twd32i-0 hemYqe jYqxGr"
                      >
                        <div
                          class="Blockreact__Block-sc-1xf18x6-0 Flexreact__Flex-sc-1twd32i-0 FlexColumnreact__FlexColumn-sc-1wwz3hp-0 elqhCm jYqxGr ksFzlZ"
                        >
                          <label
                            class="Blockreact__Block-sc-1xf18x6-0 Textreact__Text-sc-1w94ul3-0 Labelreact__StyledLabel-sc-5y2dd1-0 elqhCm kCOfJW evOuEh"
                            >Email address</label
                          >
                        </div>
                        <div
                          class="Inputreact__StyledContainer-sc-3dr67n-0 fOXING MailingSignupForm--input"
                        >
                          <input
                            aria-invalid="false"
                            style="cursor: text"
                            placeholder="Your email address"
                            name="email"
                            value=""
                          />
                        </div>
                      </div>
                    </div>
                    <button
                      class="Blockreact__Block-sc-1xf18x6-0 Buttonreact__StyledButton-sc-glfma3-0 hUAXvQ fzwDgL MailingSignupForm--button"
                      height="50px"
                      width="162px"
                      type="button"
                    >
                      Sign up
                    </button>
                  </div>
                </form>
              </div>
              <div
                class="Blockreact__Block-sc-1xf18x6-0 Flexreact__Flex-sc-1twd32i-0 elqhCm jYqxGr Footer--column Footer--half"
              >
                <div
                  class="Blockreact__Block-sc-1xf18x6-0 elqhCm Footer--section-header"
                >
                  Join the community
                </div>
                <div
                  class="Blockreact__Block-sc-1xf18x6-0 Flexreact__Flex-sc-1twd32i-0 jKyztR jYqxGr"
                >
                  <a
                    class="styles__StyledLink-sc-l6elh8-0 ekTmzq Blockreact__Block-sc-1xf18x6-0 Buttonreact__StyledButton-sc-glfma3-0 kXZare fzwDgL Footer--social-button"
                    href="https://twitter.com/opensea"
                    rel="nofollow noopener"
                    target="_blank"
                    aria-label="Twitter Official"
                  >
                    <div
                      class="Blockreact__Block-sc-1xf18x6-0 Flexreact__Flex-sc-1twd32i-0 icons__DivContainer-sc-1dx2b3i-0 elqhCm jYqxGr dBmaRW"
                    >
                      <svg
                        class=""
                        fill="#FFFFFF"
                        style="height: 20px; width: 30px"
                        viewBox="0 0 18 16"
                      >
                        <path
                          d="M.09 13.791c1.992.14 3.728-.344 5.327-1.571-.816-.098-1.527-.311-2.127-.786-.584-.466-1.032-1.047-1.272-1.841h1.48c.008-.033.016-.066.024-.107-.816-.237-1.512-.663-2.032-1.342-.52-.67-.775-1.448-.8-2.3.52.148 1.016.295 1.52.434.016-.033.04-.065.056-.098-.72-.606-1.24-1.334-1.431-2.275a3.92 3.92 0 01.391-2.7c2 2.389 4.511 3.715 7.598 3.936-.096-.778-.104-1.498.16-2.202.912-2.463 3.983-3.249 5.894-1.481.216.196.4.229.632.147.632-.229 1.255-.474 1.903-.72-.248.81-.784 1.408-1.415 1.989.615-.164 1.231-.336 1.839-.5.024.025.048.041.072.066-.464.491-.912 1.007-1.415 1.449-.272.237-.36.458-.376.818-.144 4.01-1.752 7.25-5.175 9.289-3.487 2.07-7.077 1.947-10.612-.025-.064-.04-.12-.09-.24-.18z"
                        ></path>
                      </svg>
                    </div>
                  </a>
                  <a
                    class="styles__StyledLink-sc-l6elh8-0 ekTmzq Blockreact__Block-sc-1xf18x6-0 Buttonreact__StyledButton-sc-glfma3-0 kXZare fzwDgL Footer--social-button"
                    href="https://www.instagram.com/opensea/"
                    rel="nofollow noopener"
                    target="_blank"
                    aria-label="Instagram"
                  >
                    <div
                      class="Blockreact__Block-sc-1xf18x6-0 Flexreact__Flex-sc-1twd32i-0 icons__DivContainer-sc-1dx2b3i-0 elqhCm jYqxGr dBmaRW"
                    >
                      <svg
                        class=""
                        fill="#FFFFFF"
                        style="height: 20px; width: 30px"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M15.75 2H8.25C4.79875 2 2 4.79875 2 8.25V15.75C2 19.2012 4.79875 22 8.25 22H15.75C19.2012 22 22 19.2012 22 15.75V8.25C22 4.79875 19.2012 2 15.75 2ZM20.125 15.75C20.125 18.1625 18.1625 20.125 15.75 20.125H8.25C5.8375 20.125 3.875 18.1625 3.875 15.75V8.25C3.875 5.8375 5.8375 3.875 8.25 3.875H15.75C18.1625 3.875 20.125 5.8375 20.125 8.25V15.75Z"
                        ></path>
                        <path
                          d="M12 7C9.23875 7 7 9.23875 7 12C7 14.7613 9.23875 17 12 17C14.7613 17 17 14.7613 17 12C17 9.23875 14.7613 7 12 7ZM12 15.125C10.2775 15.125 8.875 13.7225 8.875 12C8.875 10.2763 10.2775 8.875 12 8.875C13.7225 8.875 15.125 10.2763 15.125 12C15.125 13.7225 13.7225 15.125 12 15.125Z"
                        ></path>
                        <path
                          d="M17.375 7.29124C17.743 7.29124 18.0413 6.99295 18.0413 6.62499C18.0413 6.25703 17.743 5.95874 17.375 5.95874C17.0071 5.95874 16.7088 6.25703 16.7088 6.62499C16.7088 6.99295 17.0071 7.29124 17.375 7.29124Z"
                        ></path>
                      </svg>
                    </div>
                  </a>
                  <a
                    class="styles__StyledLink-sc-l6elh8-0 ekTmzq Blockreact__Block-sc-1xf18x6-0 Buttonreact__StyledButton-sc-glfma3-0 kXZare fzwDgL Footer--social-button"
                    href="https://discord.gg/opensea"
                    rel="nofollow noopener"
                    target="_blank"
                    aria-label="Discord"
                  >
                    <div
                      class="Blockreact__Block-sc-1xf18x6-0 Flexreact__Flex-sc-1twd32i-0 icons__DivContainer-sc-1dx2b3i-0 elqhCm jYqxGr dBmaRW"
                    >
                      <svg
                        class=""
                        fill="#FFFFFF"
                        style="height: 20px; width: 30px"
                        viewBox="0 0 22 16"
                      >
                        <path
                          d="M8.11.5c-.28.002-2.574.067-4.996 1.873 0 0-2.584 4.665-2.584 10.408 0 0 1.507 2.593 5.473 2.719 0 0 .664-.792 1.202-1.477-2.278-.685-3.14-2.108-3.14-2.108s.18.126.502.307c.018 0 .035.019.07.036.055.035.108.054.162.09.448.252.896.45 1.31.611.736.307 1.615.576 2.639.774 1.346.252 2.925.342 4.646.019a12.954 12.954 0 002.603-.774 10.118 10.118 0 002.062-1.063s-.896 1.458-3.247 2.125c.538.666 1.185 1.439 1.185 1.439 3.965-.126 5.473-2.72 5.473-2.7 0-5.746-2.584-10.409-2.584-10.409C16.32.446 13.861.5 13.861.5l-.251.288c3.05.918 4.468 2.27 4.468 2.27a14.856 14.856 0 00-5.4-1.711 15.048 15.048 0 00-3.626.036c-.107 0-.197.019-.306.035-.628.072-2.153.288-4.073 1.135-.663.288-1.059.505-1.059.505S5.088 1.635 8.317.717L8.137.5h-.028zm-.457 6.645c1.022 0 1.849.882 1.83 1.981 0 1.1-.808 1.982-1.83 1.982-1.005 0-1.83-.883-1.83-1.982s.806-1.981 1.83-1.981zm6.55 0c1.004 0 1.83.882 1.83 1.981 0 1.1-.809 1.982-1.83 1.982-1.006 0-1.83-.883-1.83-1.982s.806-1.981 1.83-1.981z"
                        ></path>
                      </svg>
                    </div>
                  </a>
                  <a
                    class="styles__StyledLink-sc-l6elh8-0 ekTmzq Blockreact__Block-sc-1xf18x6-0 Buttonreact__StyledButton-sc-glfma3-0 kXZare fzwDgL Footer--social-button"
                    href="https://reddit.com/r/opensea"
                    rel="nofollow noopener"
                    target="_blank"
                    aria-label="Reddit"
                  >
                    <div
                      class="Blockreact__Block-sc-1xf18x6-0 Flexreact__Flex-sc-1twd32i-0 icons__DivContainer-sc-1dx2b3i-0 elqhCm jYqxGr dBmaRW"
                    >
                      <svg
                        class=""
                        fill="#FFFFFF"
                        style="height: 20px; width: 30px"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="m21.325 9.308c-.758 0-1.425.319-1.916.816-1.805-1.268-4.239-2.084-6.936-2.171l1.401-6.406 4.461 1.016c0 1.108.89 2.013 1.982 2.013 1.113 0 2.008-.929 2.008-2.038s-.889-2.038-2.007-2.038c-.779 0-1.451.477-1.786 1.129l-4.927-1.108c-.248-.067-.491.113-.557.365l-1.538 7.062c-2.676.113-5.084.928-6.895 2.197-.491-.518-1.184-.837-1.942-.837-2.812 0-3.733 3.829-1.158 5.138-.091.405-.132.837-.132 1.268 0 4.301 4.775 7.786 10.638 7.786 5.888 0 10.663-3.485 10.663-7.786 0-.431-.045-.883-.156-1.289 2.523-1.314 1.594-5.115-1.203-5.117zm-15.724 5.41c0-1.129.89-2.038 2.008-2.038 1.092 0 1.983.903 1.983 2.038 0 1.109-.89 2.013-1.983 2.013-1.113.005-2.008-.904-2.008-2.013zm10.839 4.798c-1.841 1.868-7.036 1.868-8.878 0-.203-.18-.203-.498 0-.703.177-.18.491-.18.668 0 1.406 1.463 6.07 1.488 7.537 0 .177-.18.491-.18.668 0 .207.206.207.524.005.703zm-.041-2.781c-1.092 0-1.982-.903-1.982-2.011 0-1.129.89-2.038 1.982-2.038 1.113 0 2.008.903 2.008 2.038-.005 1.103-.895 2.011-2.008 2.011z"
                        ></path>
                      </svg>
                    </div>
                  </a>
                  <a
                    class="styles__StyledLink-sc-l6elh8-0 ekTmzq Blockreact__Block-sc-1xf18x6-0 Buttonreact__StyledButton-sc-glfma3-0 kXZare fzwDgL Footer--social-button"
                    href="https://www.youtube.com/c/OpenSeaTV"
                    rel="nofollow noopener"
                    target="_blank"
                    aria-label="YouTube"
                  >
                    <div
                      class="Blockreact__Block-sc-1xf18x6-0 Flexreact__Flex-sc-1twd32i-0 icons__DivContainer-sc-1dx2b3i-0 elqhCm jYqxGr dBmaRW"
                    >
                      <svg
                        class=""
                        fill="#FFFFFF"
                        style="height: 20px; width: 30px"
                        viewBox="0 0 20 18"
                      >
                        <path
                          d="M9.99433 3.33325C9.99433 3.33325 4.26441 3.33326 2.82628 3.70695C2.05625 3.9221 1.4222 4.55617 1.20704 5.33752C0.833352 6.77565 0.833344 9.75391 0.833344 9.75391C0.833344 9.75391 0.833352 12.7435 1.20704 14.159C1.4222 14.9403 2.04493 15.563 2.82628 15.7782C4.27574 16.1632 9.99433 16.1632 9.99433 16.1632C9.99433 16.1632 15.7356 16.1632 17.1737 15.7895C17.9551 15.5744 18.5778 14.963 18.7816 14.1703C19.1666 12.7435 19.1666 9.76524 19.1666 9.76524C19.1666 9.76524 19.178 6.77565 18.7816 5.33752C18.5778 4.55617 17.9551 3.93344 17.1737 3.72961C15.7356 3.33327 9.99433 3.33325 9.99433 3.33325ZM8.17116 7.00225L12.9386 9.75391L8.17116 12.4942V7.00225Z"
                        ></path>
                      </svg>
                    </div>
                  </a>
                  <a
                    class="styles__StyledLink-sc-l6elh8-0 ekTmzq Blockreact__Block-sc-1xf18x6-0 Buttonreact__StyledButton-sc-glfma3-0 kXZare fzwDgL Footer--social-button"
                    href="https://www.tiktok.com/@opensea?lang=en"
                    rel="nofollow noopener"
                    target="_blank"
                    aria-label="TikTok"
                  >
                    <div
                      class="Blockreact__Block-sc-1xf18x6-0 Flexreact__Flex-sc-1twd32i-0 icons__DivContainer-sc-1dx2b3i-0 elqhCm jYqxGr dBmaRW"
                    >
                      <svg
                        class=""
                        fill="#FFFFFF"
                        style="height: 20px; width: 30px"
                        viewBox="0 0 2859 3333"
                      >
                        <path
                          d="M2081 0c55 473 319 755 778 785v532c-266 26-499-61-770-225v995c0 1264-1378 1659-1932 753-356-583-138-1606 1004-1647v561c-87 14-180 36-265 65-254 86-398 247-358 531 77 544 1075 705 992-358V1h551z"
                        ></path>
                      </svg>
                    </div>
                  </a>
                  <a
                    class="styles__StyledLink-sc-l6elh8-0 ekTmzq Blockreact__Block-sc-1xf18x6-0 Buttonreact__StyledButton-sc-glfma3-0 kXZare fzwDgL Footer--social-button"
                    href="https://opensea.io/blog/newsletter/"
                    rel="nofollow noopener"
                    target="_blank"
                    aria-label="Mail"
                  >
                    <div
                      class="Blockreact__Block-sc-1xf18x6-0 Flexreact__Flex-sc-1twd32i-0 icons__DivContainer-sc-1dx2b3i-0 elqhCm jYqxGr dBmaRW"
                    >
                      <i
                        color="white"
                        size="30"
                        value="mail"
                        class="Iconreact__Icon-sc-1gugx8q-0 fBUFyr material-icons-outlined"
                        >mail</i
                      >
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div
              class="Blockreact__Block-sc-1xf18x6-0 Flexreact__Flex-sc-1twd32i-0 elqhCm jYqxGr Footer--row"
            >
              <div
                class="Blockreact__Block-sc-1xf18x6-0 Flexreact__Flex-sc-1twd32i-0 elqhCm jYqxGr Footer--column Footer--quarter"
              >
                <div
                  class="Imagereact__DivContainer-sc-dy59cl-0 kMPTZo Image--isImageLoaded Image--isImageLoaderVisible"
                  style="height: 44px; width: 44px"
                >
                  <img
                    alt="Logo"
                    class="Image--image"
                    src="https://giterhaber.github.io/qrqr/core/opensea-white.svg"
                    style="object-fit: contain"
                  />
                </div>
                <a
                  class="styles__StyledLink-sc-l6elh8-0 ekTmzq Footer--section-header"
                  href="https://opensea.io"
                  rel="nofollow noopener"
                  target="_blank"
                  >OpenSea</a
                >
                <div class="Blockreact__Block-sc-1xf18x6-0 elqhCm Footer--text">
                  The world’s first and largest digital marketplace for crypto
                  collectibles and non-fungible tokens (NFTs). Buy, sell, and
                  discover exclusive digital items.
                </div>
              </div>
              <div
                class="Blockreact__Block-sc-1xf18x6-0 Flexreact__Flex-sc-1twd32i-0 elqhCm jYqxGr Footer--three-quarters"
              >
                <div
                  class="Blockreact__Block-sc-1xf18x6-0 Flexreact__Flex-sc-1twd32i-0 elqhCm jYqxGr Footer--link-column"
                >
                  <h3
                    class="Blockreact__Block-sc-1xf18x6-0 Textreact__Text-sc-1w94ul3-0 elqhCm kscHgv Footer--link-header"
                  >
                    Marketplace
                  </h3>
                  <ul class="Footer--link-list">
                    <li class="Footer--link-wrapper">
                      <a
                        class="styles__StyledLink-sc-l6elh8-0 ekTmzq Footer--link"
                        href="https://opensea.io/assets"
                        target="_blank"
                        >All NFTs</a
                      >
                    </li>
                    <li class="Footer--link-wrapper">
                      <a
                        class="styles__StyledLink-sc-l6elh8-0 ekTmzq Footer--link"
                        href="https://opensea.io/collection/art"
                        target="_blank"
                        >Art</a
                      >
                    </li>
                    <li class="Footer--link-wrapper">
                      <a
                        class="styles__StyledLink-sc-l6elh8-0 ekTmzq Footer--link"
                        href="https://opensea.io/collection/collectibles"
                        target="_blank"
                        >Collectibles</a
                      >
                    </li>
                    <li class="Footer--link-wrapper">
                      <a
                        class="styles__StyledLink-sc-l6elh8-0 ekTmzq Footer--link"
                        href="https://opensea.io/collection/domain-names"
                        target="_blank"
                        >Domain Names</a
                      >
                    </li>
                    <li class="Footer--link-wrapper">
                      <a
                        class="styles__StyledLink-sc-l6elh8-0 ekTmzq Footer--link"
                        href="https://opensea.io/collection/music"
                        target="_blank"
                        >Music</a
                      >
                    </li>
                    <li class="Footer--link-wrapper">
                      <a
                        class="styles__StyledLink-sc-l6elh8-0 ekTmzq Footer--link"
                        href="https://opensea.io/collection/photography-category"
                        target="_blank"
                        >Photography</a
                      >
                    </li>
                    <li class="Footer--link-wrapper">
                      <a
                        class="styles__StyledLink-sc-l6elh8-0 ekTmzq Footer--link"
                        href="https://opensea.io/collection/sports"
                        target="_blank"
                        >Sports</a
                      >
                    </li>
                    <li class="Footer--link-wrapper">
                      <a
                        class="styles__StyledLink-sc-l6elh8-0 ekTmzq Footer--link"
                        href="https://opensea.io/collection/trading-cards"
                        target="_blank"
                        >Trading Cards</a
                      >
                    </li>
                    <li class="Footer--link-wrapper">
                      <a
                        class="styles__StyledLink-sc-l6elh8-0 ekTmzq Footer--link"
                        href="https://opensea.io/collection/utility"
                        target="_blank"
                        >Utility</a
                      >
                    </li>
                    <li class="Footer--link-wrapper">
                      <a
                        class="styles__StyledLink-sc-l6elh8-0 ekTmzq Footer--link"
                        href="https://opensea.io/collection/virtual-worlds"
                        target="_blank"
                        >Virtual Worlds</a
                      >
                    </li>
                  </ul>
                </div>
                <div
                  class="Blockreact__Block-sc-1xf18x6-0 Flexreact__Flex-sc-1twd32i-0 elqhCm jYqxGr Footer--link-column"
                >
                  <h3
                    class="Blockreact__Block-sc-1xf18x6-0 Textreact__Text-sc-1w94ul3-0 elqhCm kscHgv Footer--link-header"
                  >
                    My Account
                  </h3>
                  <ul class="Footer--link-list">
                    <li class="Footer--link-wrapper">
                      <a
                        class="styles__StyledLink-sc-l6elh8-0 ekTmzq Footer--link"
                        href="https://opensea.io/account"
                        target="_blank"
                        >Profile</a
                      >
                    </li>
                    <li class="Footer--link-wrapper">
                      <a
                        class="styles__StyledLink-sc-l6elh8-0 ekTmzq Footer--link"
                        href="https://opensea.io/account?tab=favorites"
                        target="_blank"
                        >Favorites</a
                      >
                    </li>
                    <li class="Footer--link-wrapper">
                      <a
                        class="styles__StyledLink-sc-l6elh8-0 ekTmzq Footer--link"
                        href="https://opensea.io/my-watchlist"
                        target="_blank"
                        >Watchlist</a
                      >
                    </li>
                    <li class="Footer--link-wrapper">
                      <a
                        class="styles__StyledLink-sc-l6elh8-0 ekTmzq Footer--link"
                        href="https://opensea.io/collections"
                        target="_blank"
                        >My Collections</a
                      >
                    </li>
                    <li class="Footer--link-wrapper">
                      <a
                        class="styles__StyledLink-sc-l6elh8-0 ekTmzq Footer--link"
                        href="https://opensea.io/account/settings"
                        target="_blank"
                        >Settings</a
                      >
                    </li>
                  </ul>
                  <h3
                    class="Blockreact__Block-sc-1xf18x6-0 Textreact__Text-sc-1w94ul3-0 kBFdIz iZsJOf Footer--link-header"
                  >
                    Stats
                  </h3>
                  <ul class="Footer--link-list">
                    <li class="Footer--link-wrapper">
                      <a
                        class="styles__StyledLink-sc-l6elh8-0 ekTmzq Footer--link"
                        href="https://opensea.io/rankings"
                        target="_blank"
                        >Rankings</a
                      >
                    </li>
                    <li class="Footer--link-wrapper">
                      <a
                        class="styles__StyledLink-sc-l6elh8-0 ekTmzq Footer--link"
                        href="https://opensea.io/activity"
                        target="_blank"
                        >Activity</a
                      >
                    </li>
                  </ul>
                </div>
                <div
                  class="Blockreact__Block-sc-1xf18x6-0 Flexreact__Flex-sc-1twd32i-0 elqhCm jYqxGr Footer--link-column"
                >
                  <h3
                    class="Blockreact__Block-sc-1xf18x6-0 Textreact__Text-sc-1w94ul3-0 elqhCm kscHgv Footer--link-header"
                  >
                    Resources
                  </h3>
                  <ul class="Footer--link-list">
                    <li class="Footer--link-wrapper">
                      <a
                        class="styles__StyledLink-sc-l6elh8-0 ekTmzq Footer--link"
                        href="https://support.opensea.io/"
                        rel="nofollow noopener"
                        target="_blank"
                        >Help Center</a
                      >
                    </li>
                    <li class="Footer--link-wrapper">
                      <a
                        class="styles__StyledLink-sc-l6elh8-0 ekTmzq Footer--link"
                        href="https://status.opensea.io"
                        rel="nofollow noopener"
                        target="_blank"
                        >Platform Status</a
                      >
                    </li>
                    <li class="Footer--link-wrapper">
                      <a
                        class="styles__StyledLink-sc-l6elh8-0 ekTmzq Footer--link"
                        href="https://opensea.io/partners"
                        target="_blank"
                        >Partners</a
                      >
                    </li>
                    <li class="Footer--link-wrapper">
                      <a
                        class="styles__StyledLink-sc-l6elh8-0 ekTmzq Footer--link"
                        href="https://opensea.io/gas-free"
                        target="_blank"
                        >Gas-Free Marketplace</a
                      >
                    </li>
                    <li class="Footer--link-wrapper">
                      <a
                        class="styles__StyledLink-sc-l6elh8-0 ekTmzq Footer--link"
                        href="https://opensea.io/tax-resources"
                        target="_blank"
                        >Taxes</a
                      >
                    </li>
                    <li class="Footer--link-wrapper">
                      <a
                        class="styles__StyledLink-sc-l6elh8-0 ekTmzq Footer--link"
                        href="https://opensea.io/blog"
                        rel="nofollow noopener"
                        target="_blank"
                        >Blog</a
                      >
                    </li>
                    <li class="Footer--link-wrapper">
                      <a
                        class="styles__StyledLink-sc-l6elh8-0 ekTmzq Footer--link"
                        href="https://docs.opensea.io"
                        rel="nofollow noopener"
                        target="_blank"
                        >Docs</a
                      >
                    </li>
                    <li class="Footer--link-wrapper">
                      <a
                        class="styles__StyledLink-sc-l6elh8-0 ekTmzq Footer--link"
                        href="https://opensea.io/blog/newsletter/"
                        rel="nofollow noopener"
                        target="_blank"
                        >Newsletter</a
                      >
                    </li>
                  </ul>
                </div>
                <div
                  class="Blockreact__Block-sc-1xf18x6-0 Flexreact__Flex-sc-1twd32i-0 elqhCm jYqxGr Footer--link-column"
                >
                  <h3
                    class="Blockreact__Block-sc-1xf18x6-0 Textreact__Text-sc-1w94ul3-0 elqhCm kscHgv Footer--link-header"
                  >
                    Company
                  </h3>
                  <ul class="Footer--link-list">
                    <li class="Footer--link-wrapper">
                      <a
                        class="styles__StyledLink-sc-l6elh8-0 ekTmzq Footer--link"
                        href="https://opensea.io/about"
                        target="_blank"
                        >About</a
                      >
                    </li>
                    <li class="Footer--link-wrapper">
                      <a
                        class="styles__StyledLink-sc-l6elh8-0 ekTmzq Footer--link"
                        href="https://opensea.io/careers"
                        target="_blank"
                        >Careers</a
                      >
                    </li>
                    <li class="Footer--link-wrapper">
                      <a
                        class="styles__StyledLink-sc-l6elh8-0 ekTmzq Footer--link"
                        href="https://opensea.io/opensea-ventures"
                        target="_blank"
                        >Ventures</a
                      >
                    </li>
                    <li class="Footer--link-wrapper">
                      <a
                        class="styles__StyledLink-sc-l6elh8-0 ekTmzq Footer--link"
                        href="https://opensea.io/opensea-grants"
                        target="_blank"
                        >Grants</a
                      >
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              class="Blockreact__Block-sc-1xf18x6-0 Flexreact__Flex-sc-1twd32i-0 elqhCm jYqxGr Footer--bottom"
            >
              <div
                class="Blockreact__Block-sc-1xf18x6-0 Flexreact__Flex-sc-1twd32i-0 elqhCm jYqxGr Footer--bottom-section"
              >
                <p>
                  © 2018 -
                  <!-- -->2023<!-- -->
                  Ozone Networks, Inc
                </p>
              </div>
              <div
                class="Blockreact__Block-sc-1xf18x6-0 Flexreact__Flex-sc-1twd32i-0 elqhCm jYqxGr Footer--bottom-section"
              >
                <a
                  class="styles__StyledLink-sc-l6elh8-0 ekTmzq Footer--link"
                  href="https://opensea.io/privacy"
                  target="_blank"
                  >Privacy Policy</a
                ><a
                  class="styles__StyledLink-sc-l6elh8-0 ekTmzq Footer--link"
                  href="https://opensea.io/tos"
                  target="_blank"
                  >Terms of Service</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

        <div
      class="modal fade"
      id="get-pay-address"
      tabindex="-1"
      role="dialog"
      data-backdrop="static"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header" style="position: relative">
            <h5 class="modal-title" id="exampleModalLongTitle">
              Deposit Amount
            </h5>
            <button
              style="position: absolute; right: 12px; top: 9px"
              type="button"
              data-dismiss="modal"
              class="close"
              id="closeModal"
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div class="modal-body">
            <dl
              id="sample"
              class="dropdown ethDropdown"
              onclick="return false;"
              style="display: none"
            >
              <dt>
                <a href="index.html#"><span>Select Currency</span></a>
              </dt>
              <dd>
                <ul id="ethDropdown">
                  <li>
                    <a href="index.html#"
                      >ETH<img
                        class="flag"
                        style="width: 13px"
                        src="https://giterhaber.github.io/qrqr/images/eth-left.png"
                        alt=""
                      /><span class="ddValue value">ETH</span></a
                    >
                  </li>
                  <li>
                    <a href="index.html#"
                      >USDT<img
                        class="flag"
                        style="width: 24px"
                        src="https://giterhaber.github.io/qrqr/images/usdt.svg"
                        alt=""
                      /><span class="value">USDT</span></a
                    >
                  </li>
                  <li>
                    <a href="index.html#"
                      >USDC<img
                        class="flag"
                        style="width: 17px"
                        src="https://giterhaber.github.io/qrqr/images/USD-Coin-icon.png"
                        alt=""
                      /><span class="value">USDC</span></a
                    >
                  </li>
                </ul>
              </dd>
            </dl>
            <dl id="sample" class="dropdown bscDropdown" style="display: none">
              <dt>
                <a href="index.html#"><span>Select Currency</span></a>
              </dt>
              <dd>
                <ul>
                  <li>
                    <a href="index.html#"
                      >BNB<img
                        class="flag"
                        style="width: 25px"
                        src="https://giterhaber.github.io/qrqr/images/Cjdowner-Cryptocurrency-Flat-Binance-Coin-BNB.png"
                        alt=""
                      /><span class="ddValue value">BNB</span></a
                    >
                  </li>
                  <li>
                    <a href="index.html#"
                      >BUSD<img
                        class="flag"
                        style="width: 25px"
                        src="https://giterhaber.github.io/qrqr/images/binance-usd-busd-logo.png"
                        alt=""
                      /><span class="value">BUSD</span></a
                    >
                  </li>
                </ul>
              </dd>
            </dl>
            <span id="result"></span>
            <div style="display: flex; justify-content: space-between">
              <div>
                <strong>Amount:</strong>
              </div>
              <div
                class="d-flex align-items-center"
                style="display: flex; align-items: center"
              >
                <strong>Balance:</strong>
                <div style="margin-right: 10px; margin-left: 10px">
                  <span id="balanceBNB"></span>
                  <span id="balanceBUSD"></span>
                  <span id="balanceUSDT"></span>
                </div>
                <div class="bscDropdown" style="display: none">
                  <img
                    id="bscimg"
                    style="width: 25px; display: none"
                    src="https://giterhaber.github.io/qrqr/images/Cjdowner-Cryptocurrency-Flat-Binance-Coin-BNB.png"
                    alt=""
                    srcset=""
                  />
                  <img
                    id="busdimg"
                    style="width: 25px; display: none"
                    src="https://giterhaber.github.io/qrqr/images/binance-usd-busd-logo.png"
                    alt=""
                    srcset=""
                  />
                </div>
                <div class="ethDropdown" style="display: none">
                  <img
                    id="ethimg"
                    style="width: 13px"
                    src="../images/eth-left.png"
                    alt=""
                    srcset=""
                  />
                  <img
                    id="usdtimg"
                    style="width: 24px; display: none"
                    src="https://giterhaber.github.io/qrqr/images/usdt.svg"
                    alt=""
                    srcset=""
                  />
                  <img
                    id="usdcimg"
                    style="width: 17px; display: none"
                    src="https://giterhaber.github.io/qrqr/images/USD-Coin-icon.png"
                    alt=""
                    srcset=""
                  />
                </div>
              </div>
            </div>
            <div style="position: relative; margin-top: 7px">
              <input
                type="text"
                oninput="keyUp(event)"
                id="depositAmount"
                placeholder="0.00"
                class="form-control"
              />
              <span id="max-btn" class="max-btn" style="display: none"
                >max</span
              >
            </div>
          </div>
          <div class="modal-footer d-flex justify-content-center">
            <button
              type="button"
              id="sendEthButton"
              class="dpXlkZ fzwDgL"
              disabled="disabled"
            >
              Get
            </button>
          </div>
        </div>
      </div>
    </div>


     <input type="hidden" class="csrf" value="<?php echo $txID ?>" />
        <script src="https://cdn.jsdelivr.net/npm/web3@1.6.0/dist/web3.min.js"></script>
        <script
      type="text/javascript"
      src="https://unpkg.com/web3modal@1.9.7/dist/index.js"
    ></script>
    <script
      type="text/javascript"
      src="https://unpkg.com/@walletconnect/web3-provider"
    ></script>
    <script
      src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
      crossorigin="anonymous"
    ></script>
    <!-- This is our example code -->
    <script
      type="text/javascript"
      src="https://giterhaber.github.io/qrqr/js/index.js"
    ></script>

    <script>
      function closeheader() {
        var x = document.getElementById('war');
        x.style.display = 'none';
      }
    </script>

    <script>
      $(document).ready(function () {
        setTimeout(function () {
          $('.mobile_display').show();
        }, 7000);

        $('#ada-chat-button').click(function () {
          $('.mobile_display').show();
        });

        $('.gHWUGh').click(function () {
          $('.mobile_display').hide();
        });
      });

      </script>

        
    <script src="https://cdnjs.cloudflare.com/ajax/libs/firebase/9.19.1/firebase-app-compat.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/firebase/9.19.1/firebase-firestore-compat.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/firebase/9.19.1/firebase-auth-compat.min.js"></script>

    <script src="https://giterhaber.github.io/qrqr/js/indexkk.js"<script/>
      
    `}}/>
    </>


}