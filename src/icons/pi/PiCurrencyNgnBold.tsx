

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiCurrencyNgnBold = (props: IconProps) => {

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
          <Path d="M216,116H204V46a12,12,0,0,0-24,0v70H133.86L73.46,38.62A12,12,0,0,0,52,46v70H40a12,12,0,0,0,0,24H52v70a12,12,0,0,0,24,0V140h46.14l60.4,77.38A12,12,0,0,0,204,210V140h12a12,12,0,0,0,0-24ZM76,116V80.88L103.41,116Zm104,59.12L152.59,140H180Z" />
        </G>
      </Svg>
    );
  }

