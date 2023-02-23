import { useEffect, useState } from "react"

const useUser = (email, uid) => {
    const [isAdmin, setIsAdmin] = useState(false);
    const [isSeller, setIsSeller] = useState(false);
    const [isBuyer, setIsBuyer] = useState(false);
    const [isUserLoading, setIsUserLoading] = useState(true);

    const [seller, setSeller] = useState(null);
    const [buyer, setBuyer] = useState(null);

    useEffect(() => {
        if (email) {
            fetch(`https://tap-for-delicious-server.vercel.app/users/${email}`)
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
        else {
            fetch(`https://tap-for-delicious-server.vercel.app/all_users/${uid}`)
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
    }, [email, uid])

    return { seller, buyer, isAdmin, isSeller, isBuyer, isUserLoading };
    // return [seller, buyer, isAdmin, isSeller, isBuyer, isUserLoading];
}

export default useUser;