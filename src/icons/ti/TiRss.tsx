

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TiRss = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 12, 12)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M6.002 15.999c-1.107 0-2.004.897-2.002 2.001 0 1.104.896 2.001 2.002 1.999 1.103.002 2-.894 1.998-1.999.002-1.107-.895-2.003-1.998-2.001zM6 4c-1.104 0-2 .896-2 2s.896 2 2 2c5.514 0 10 4.486 10 10 0 1.104.896 2 2 2s2-.896 2-2c0-7.72-6.28-14-14-14zM6 10c-1.104 0-2 .896-2 2s.896 2 2 2c2.205 0 4 1.794 4 4 0 1.104.896 2 2 2s2-.896 2-2c0-4.411-3.589-8-8-8z" />
        </G>
      </Svg>
    );
  }

