

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiCurrencyKztLight = (props: IconProps) => {

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
          <Path  d="M206,96a6,6,0,0,1-6,6H134V216a6,6,0,0,1-12,0V102H56a6,6,0,0,1,0-12H200A6,6,0,0,1,206,96ZM56,62H200a6,6,0,0,0,0-12H56a6,6,0,0,0,0,12Z" />
        </G>
      </Svg>
    );
  }

