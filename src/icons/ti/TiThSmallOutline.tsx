

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TiThSmallOutline = (props: IconProps) => {

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
          <Path  d="M6 16h-2c-1.104 0-2 .896-2 2v2c0 1.104.896 2 2 2h2c1.104 0 2-.896 2-2v-2c0-1.104-.896-2-2-2zm0 4h-2v-2h2v2zM6 9h-2c-1.104 0-2 .896-2 2v2c0 1.104.896 2 2 2h2c1.104 0 2-.896 2-2v-2c0-1.104-.896-2-2-2zm0 4h-2v-2h2v2zM6 2h-2c-1.104 0-2 .896-2 2v2c0 1.104.896 2 2 2h2c1.104 0 2-.896 2-2v-2c0-1.104-.896-2-2-2zm0 4h-2v-2h2v2zM13 16h-2c-1.104 0-2 .896-2 2v2c0 1.104.896 2 2 2h2c1.104 0 2-.896 2-2v-2c0-1.104-.896-2-2-2zm0 4h-2v-2h2v2zM13 9h-2c-1.104 0-2 .896-2 2v2c0 1.104.896 2 2 2h2c1.104 0 2-.896 2-2v-2c0-1.104-.896-2-2-2zm0 4h-2v-2h2v2zM13 2h-2c-1.104 0-2 .896-2 2v2c0 1.104.896 2 2 2h2c1.104 0 2-.896 2-2v-2c0-1.104-.896-2-2-2zm0 4h-2v-2h2v2zM20 16h-2c-1.104 0-2 .896-2 2v2c0 1.104.896 2 2 2h2c1.104 0 2-.896 2-2v-2c0-1.104-.896-2-2-2zm0 4h-2v-2h2v2zM20 9h-2c-1.104 0-2 .896-2 2v2c0 1.104.896 2 2 2h2c1.104 0 2-.896 2-2v-2c0-1.104-.896-2-2-2zm0 4h-2v-2h2v2zM20 2h-2c-1.104 0-2 .896-2 2v2c0 1.104.896 2 2 2h2c1.104 0 2-.896 2-2v-2c0-1.104-.896-2-2-2zm0 4h-2v-2h2v2z" />
        </G>
      </Svg>
    );
  }

