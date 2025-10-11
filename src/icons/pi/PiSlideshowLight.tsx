

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiSlideshowLight = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 256 256"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 128, 128)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M192,50H64A14,14,0,0,0,50,64V192a14,14,0,0,0,14,14H192a14,14,0,0,0,14-14V64A14,14,0,0,0,192,50Zm2,142a2,2,0,0,1-2,2H64a2,2,0,0,1-2-2V64a2,2,0,0,1,2-2H192a2,2,0,0,1,2,2ZM238,56V200a6,6,0,0,1-12,0V56a6,6,0,0,1,12,0ZM30,56V200a6,6,0,0,1-12,0V56a6,6,0,0,1,12,0Z" />
        </G>
      </Svg>
    );
  }

