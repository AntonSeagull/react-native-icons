

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiSlideshow = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 256 256"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M192,48H64A16,16,0,0,0,48,64V192a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64A16,16,0,0,0,192,48Zm0,144H64V64H192V192ZM240,56V200a8,8,0,0,1-16,0V56a8,8,0,0,1,16,0ZM32,56V200a8,8,0,0,1-16,0V56a8,8,0,0,1,16,0Z" />
        </G>
      </Svg>
    );
  }

