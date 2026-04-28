import React from "react";


const Footer : React.FC = () => {
    return (
        <footer className="bg-gray-900 text-gray-500 text-sm py-6">

  <p>&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
</footer>
    );
};

export default Footer;