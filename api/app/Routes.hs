{-# LANGUAGE 
    OverloadedStrings,
    TemplateHaskell, 
    QuasiQuotes, 
    TypeFamilies,
    MultiParamTypeClasses, 
    FlexibleInstances 
#-}
module Routes where

import Wai.Routes
import qualified Data.Text as T

data APIRoute = APIRoute

-- Generate the routing code
mkRoute "APIRoute" [parseRoutes|
/         HomeR GET
-- /comments CommentsR GET
|]

getHomeR :: Handler APIRoute
getHomeR = runHandlerM $ do
    Just r <- maybeRoute
    plain $ T.concat ["Hello world!"]

-- getCommentsR :: Handler APIRoute
-- getCommentsR = runHandlerM $ do
