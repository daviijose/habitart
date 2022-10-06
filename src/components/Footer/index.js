import React from "react";
import "./style.css"
export default function Footer() {
    return (
        <div>
            <footer class="footer-page">
                <div class="text-about">
                    <h3>Título</h3>
                    <p>orem Ipsum is simply dummy text of the printing and typesett
                        ing industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of t
                        ype and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially
                        unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more rece
                        ntly with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                </div>

                <div class="redes">
                    <div class="content-footer">
                        <a href="" class="link-rede-footer"> <img src="" alt=""/>
                            <span>Rede 1</span> </a>
                        <a href="" class="link-rede-footer"> <img src="" alt=""/>
                            <span>Rede 2</span> </a>
                        <div class="content-contact">
                            <p>numero</p>
                            <p>suporte</p>
                            <p>ouvidoria</p>
                        </div>
                    </div>

                </div>

            </footer>

        </div>
    );

}