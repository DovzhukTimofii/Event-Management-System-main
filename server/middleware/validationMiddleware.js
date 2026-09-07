export const validateRegister = (req, res, next) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({
      message: 'Username, email and password are required',
    });
  }

  if (typeof username !== 'string' || username.trim().length < 3) {
    return res.status(400).json({
      message: 'Username must contain at least 3 characters',
    });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (typeof email !== 'string' || !emailRegex.test(email)) {
    return res.status(400).json({
      message: 'Invalid email format',
    });
  }

  if (typeof password !== 'string' || password.length < 6) {
    return res.status(400).json({
      message: 'Password must contain at least 6 characters',
    });
  }

  req.body.username = username.trim();
  req.body.email = email.trim().toLowerCase();

  next();
};

export const validateLogin = (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      message: 'Email and password are required',
    });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (typeof email !== 'string' || !emailRegex.test(email)) {
    return res.status(400).json({
      message: 'Invalid email format',
    });
  }

  if (typeof password !== 'string') {
    return res.status(400).json({
      message: 'Password must be a string',
    });
  }

  req.body.email = email.trim().toLowerCase();

  next();
};
