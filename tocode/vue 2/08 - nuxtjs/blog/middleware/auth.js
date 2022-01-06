// middleware запустится до того момента, когда прогрузится страница
// тут мы делаем проверку, имеет ли пользователь доступ к содержимому

export default function (context) {
  // Universal keys
  // const {
  //   app,
  //   store,
  //   route,
  //   params,
  //   query,
  //   env,
  //   isDev,
  //   isHMR,
  //   redirect,
  //   error,
  //   $config
  // } = context
  // console.log(context);
  if (!context.store.getters.checkAuthUser) {
    context.redirect('/admin/auth')
  }
}