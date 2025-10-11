

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoOpen = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 512 512"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 256, 256)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M224,304a16,16,0,0,1-11.31-27.31L370.63,118.75A55.7,55.7,0,0,0,344,112H104a56.06,56.06,0,0,0-56,56V408a56.06,56.06,0,0,0,56,56H344a56.06,56.06,0,0,0,56-56V168a55.7,55.7,0,0,0-6.75-26.63L235.31,299.31A15.92,15.92,0,0,1,224,304Z" />
          <Path  d="M448,48H336a16,16,0,0,0,0,32h73.37l-38.74,38.75a56.35,56.35,0,0,1,22.62,22.62L432,102.63V176a16,16,0,0,0,32,0V64A16,16,0,0,0,448,48Z" />
        </G>
      </Svg>
    );
  }

