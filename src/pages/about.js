import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';

const About = () => {
    return (
        <Layout>
            <SEO title="關於弘國" />
            <Link to="/">⃪ 回首頁</Link>
            <hr></hr>
            {/* facebook */}
            <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2F%E5%BC%98%E5%9C%8B%E5%BB%A3%E5%91%8A-107647353951765&tabs&width=340&height=154&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=1835113960094058" width="340" height="154" style={{border:`none`, overflow:`hidden`}} scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>
            <p>
                弘國廣告自民國89年成立以來，已經在台中深耕20多年，累積服務客戶涵蓋大台中地區，從大型企業到個人工作室皆有豐富且密切的合作經驗。
            </p>
            <p>
                品質一向都是我們的最高優先順序，也是我們讓客戶能不斷重複光臨的秘訣。如果您有任何關於室內廣告的需求，但尚未有完整的頭緒，我們都能提供豐富的設計及實作案例供您參考。
            </p>
            <p>
                歡迎來店內洽詢！ 
                <span>電話：<a style={{ color: `blue`}} href="tel:+886423145649">04-23145649 </a></span> 
                <span>信箱：<a style={{ color: `blue`}} href="mailto:hunggwo@seed.net.tw">hunggwo@seed.net.tw</a></span>
            
            </p>
            <div style={{
                textAlign: `center`
            }}>
            
            <div class="google-maps">
                <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3640.3191685259144!2d120.65937895043797!3d24.160536878824868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34693d8395c7601b%3A0x29e789c6323ee1db!2z5byY5ZyL5buj5ZGK!5e0!3m2!1szh-TW!2sus!4v1568190785404!5m2!1szh-TW!2sus" 
                width="800" height="600" frameborder="0" style={{border:0}} allowfullscreen=""></iframe>
            </div>
                 
            </div>
           
        </Layout>
    )
}

export default About;