

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiHeartStraightBold = (props: IconProps) => {

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
          <Path  d="M225.84,54.13A62.07,62.07,0,0,0,138.32,54L128,63.58,117.68,54a62,62,0,0,0-87.58,87.8l89.35,90.65a12,12,0,0,0,17.1,0l89.29-90.59a62,62,0,0,0,0-87.7Zm-17,70.79L128,206.9,47.13,124.85a38,38,0,0,1,53.74-53.74c.1.1.2.2.31.29l18.64,17.36a12,12,0,0,0,16.36,0L154.82,71.4c.11-.09.21-.19.31-.29a38,38,0,1,1,53.68,53.81Z" />
        </G>
      </Svg>
    );
  }

