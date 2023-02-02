import { useEffect, useState } from "react"

const useUser = email => {
    const [isAdmin, setIsAdmin] = useState(false);
    const [isSeller, setIsSeller] = useState(false);
    const [isBuyer, setIsBuyer] = useState(false);
    const [isUserLoading, setIsUserLoading] = useState(true);

    const [seller, setSeller] = useState(null);
    const [buyer, setBuyer] = useState(null);

    useEffect(() => {
        if (email) {
            fetch(`http://localhost:5000/users/${email}`)
                .then(res => res.json())
                .then(data => {
                    setIsAdmin(data.isAdmin);
                    setIsSeller(data.isSeller);
                    setIsBuyer(data.isBuyer);
                    setIsUserLoading(false);
                    setSeller(data.sellerInfo);
                    setBuyer(data.buyerInfo);
                })
        }
    }, [email])
    return [seller, buyer, isAdmin, isSeller, isBuyer, isUserLoading];
}

export default useUser;