{-# LANGUAGE OverloadedStrings #-}
module Comments ( getComments ) where

import System.Directory
import Network.HTTP.Conduit
import qualified Data.ByteString.Lazy.Char8 as Char8
import GHC.IO.Encoding

data Comment = Comment 
    { id :: Int
    , body :: String
    , owner_id :: Int
    , post_id :: Int
    , post_type :: Int
    , score :: Int
    , tps :: Int
    , fps :: Int
    , rude :: Int
    , creation_date :: String
    , perspective_score :: Double
    }

-- getLocalCommentsFile :: IO (Maybe a)
getLocalCommentsFile = do
    let path = "data/main-comments.csv" 
    fileExists <- doesFileExist path
    return $ case fileExists of
        True -> Just (readFile path)
        otherwise -> Nothing

-- getRemoteCommentsFile :: IO (a)
getRemoteCommentsFile = do
    setLocaleEncoding utf8
    let url = "https://ipsbot.dvtk.me/main-comments.csv"
    let path = "data/main-comments.csv"
    body <- simpleHttp url
    let bodyStr = Char8.unpack body
    writeFile path bodyStr
    return bodyStr

-- getComments :: IO (a)
getComments = do
    localCommentsFile <- getLocalCommentsFile
    case localCommentsFile of
        (Just x) -> x
        Nothing -> getRemoteCommentsFile