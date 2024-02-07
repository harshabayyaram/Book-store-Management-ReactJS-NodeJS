import React from 'react';
import NavbarMain from './NavbarMain';

const AboutUs = () => {
    return (
        <><NavbarMain />
            <div className="container my-5">
                <div className="row">
                    <div className="col-md-8 offset-md-2">
                        <div className="text-center">
                            <h2>About Us</h2>
                            <p className="lead">Welcome to our book store management app!</p>
                            <p>We are passionate about books and technology, and we created this app to help bookstores manage their inventory, sales, and customers more efficiently.</p>
                            <p>Our team is dedicated to providing the best possible experience for bookstores and their customers. We are constantly working to improve our app and add new features based on feedback from users like you.</p>
                            <p>Thank you for choosing our app to manage your bookstore. Happy reading!</p>
                            <p>Sincerely,<br />Book store management team</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutUs;
