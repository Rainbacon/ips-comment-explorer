module Main where

import Network.Wai (Application)
import Wai.Routes
import Network.Wai.Handler.Warp (run)
import Routes

main :: IO ()
main = do
    let port = 3000
    putStrLn $ "Starting the IPS Comment API on port " ++ show port
    run port $ waiApp app

app :: RouteM ()
app = route APIRoute
