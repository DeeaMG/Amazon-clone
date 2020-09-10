function setUsername(user)
{
    if(user)
    {
        let getAtIndex = user?.email.indexOf("@");
        return user?.email.substr(0, getAtIndex);
    }

    return "Guest";
}

export default setUsername;
