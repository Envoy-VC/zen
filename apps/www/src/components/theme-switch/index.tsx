import { useTheme } from '~/lib/hooks';
import { cn } from '~/lib/utils';

import { Variants, motion } from 'framer-motion';

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const size = 25;

  const containerVariants: Variants = {
    dark: {
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.1,
      },
      backgroundColor: '#1A202C',
    },
    light: { backgroundColor: '#76A5FF' },
  };

  const childVariants: Variants = {
    dark: {
      y: 0,
      transition: {
        type: 'tween',
      },
    },
    light: {
      y: '-100px',
    },
  };

  return (
    <div className='flex w-fit justify-center'>
      <div
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        className='cursor-pointer'
      >
        <motion.div
          className={cn(
            'relative box-content flex overflow-hidden before:absolute before:right-[15%] before:top-[20%] before:z-[2] before:rounded-[50%] before:bg-white before:transition-transform before:duration-300 before:ease-linear before:content-[""] after:absolute after:right-[30%] after:top-[45%] after:z-[2] after:rounded-[50%] after:bg-white after:transition-transform after:duration-300 after:ease-linear after:content-[""] before:dark:translate-y-[100px] after:dark:translate-y-[100px]',
            'before:h-[7px] before:w-[7px] after:h-[4px] after:w-[4px] '
          )}
          style={{
            width: `${size * 2.1}px`,
            height: `${size}px`,
            borderRadius: `${size}px`,
            padding: `${size / 8}px`,
            justifyContent: theme === 'dark' ? 'flex-end' : 'flex-start',
          }}
          variants={containerVariants}
          initial={theme === 'dark' ? 'light' : 'dark'}
          exit={theme === 'dark' ? 'light' : 'dark'}
          animate={theme}
        >
          <motion.div
            className='absolute left-[25%] top-[70%] h-[3px] w-[4px] rounded-full bg-white'
            style={{
              width: `${size * 0.08}px`,
              height: `${size * 0.06}px`,
            }}
            key='circle-2'
            variants={childVariants}
          ></motion.div>
          <motion.div
            className='absolute left-[15%] top-[25%] h-[30%] w-[30%] rounded-full bg-white'
            style={{
              width: `${size * 0.3}px`,
              height: `${size * 0.3}px`,
              clipPath:
                'polygon(50% 0%, 63% 38%, 100% 38%, 69% 59%, 82% 100%, 50% 75%, 18% 100%, 31% 59%, 0 38%, 37% 38%)',
            }}
            key='subheading1'
            variants={childVariants}
          ></motion.div>
          <motion.div
            className='absolute left-[45%] top-[60%] h-[20%] w-[20%] rounded-full bg-white'
            style={{
              width: `${size * 0.2}px`,
              height: `${size * 0.2}px`,
              clipPath:
                'polygon(50% 0%, 63% 38%, 100% 38%, 69% 59%, 82% 100%, 50% 75%, 18% 100%, 31% 59%, 0 38%, 37% 38%)',
            }}
            key='subheading2'
            variants={childVariants}
          ></motion.div>
          <motion.div
            className='absolute left-[35%] top-[40%] h-[10%] w-[10%] rounded-[50%] bg-white'
            style={{
              width: `${size * 0.1}px`,
              height: `${size * 0.1}px`,
            }}
            key='circle-1'
            variants={childVariants}
          ></motion.div>
          <motion.div
            className='absolute left-[55%] top-[25%] h-[8%] w-[8%] rounded-[50%] bg-white'
            style={{
              width: `${size * 0.08}px`,
              height: `${size * 0.08}px`,
            }}
            key='circle-2'
            variants={childVariants}
          ></motion.div>
          <motion.div
            layout
            animate={theme}
            className=''
            variants={{
              dark: {
                boxShadow: 'inset 0px 10px white, inset 0px 10px 1px 1px white',
                rotate: 90,
                background: 'transparent',
              },
              light: {
                boxShadow: 'inset 0px 0px white, inset 0px 0px 0px 0px white',
                rotate: 90,
                background: '#fff',
              },
            }}
            initial={false}
            style={{
              width: `${size}px`,
              height: `${size}px`,
              zIndex: '9999',
              borderRadius: `${size}px`,
            }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default ThemeSwitcher;
