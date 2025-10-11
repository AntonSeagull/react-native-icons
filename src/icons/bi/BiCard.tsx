

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const BiCard = (props: IconProps) => {

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
          <Path  d="M17.999 17c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2h-12c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h12zm-12-12h12l.002 10H5.999V5zm-2 14h16v2h-16z" />
        </G>
      </Svg>
    );
  }

