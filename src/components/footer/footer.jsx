import React from "react";
import './footer.css'
export function Footer() {
    return (
        <React.Fragment>


            <footer class="site-footer">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12 col-md-6">
                            <h6>درباره ما</h6>
                            <p class="text-justify">نون مون<i>وبسایتی ساده و کاربر پسند </i>جهت خرید نون و تحویل درب منزل</p>
                        </div>

                        <div class="col-xs-6 col-md-3">
                            <h6>Categories</h6>
                            <ul class="footer-links">
                                <li><a href="http://scanfcode.com/category/c-language/">C</a></li>
                                <li><a href="http://scanfcode.com/category/front-end-development/">UI Design</a></li>
                                <li><a href="http://scanfcode.com/category/back-end-development/">PHP</a></li>
                                <li><a href="http://scanfcode.com/category/java-programming-language/">Java</a></li>
                                <li><a href="http://scanfcode.com/category/android/">Android</a></li>
                                <li><a href="http://scanfcode.com/category/templates/">Templates</a></li>
                            </ul>
                        </div>

                        <div class="col-xs-6 col-md-3">
                            <h6>Quick Links</h6>
                            <ul class="footer-links">
                                
                                <li><a href="http://mohammadasadiyan.ir">درباره ما</a></li>
                                <li><a href="http://mohammadasadiyan.ir">ارتباط با ما</a></li>
                            </ul>
                        </div>
                    </div>
                    <hr />
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-md-8 col-sm-6 col-xs-12">
                            <p class="copyright-text">Copyright &copy; 2017 All Rights Reserved by
                                <a href="#">Scanfcode</a>.
                            </p>
                        </div>

                        <div class="col-md-4 col-sm-6 col-xs-12">
                            <ul class="social-icons">
                                <li><a class="facebook" href="#"><i class="fa fa-facebook"></i></a></li>
                                <li><a class="twitter" href="#"><i class="fa fa-twitter"></i></a></li>
                                <li><a class="dribbble" href="#"><i class="fa fa-dribbble"></i></a></li>
                                <li><a class="linkedin" href="#"><i class="fa fa-linkedin"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>


        </React.Fragment>
    );
}