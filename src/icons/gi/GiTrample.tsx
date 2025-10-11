

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GiTrample = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 512 512"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M136 16h15l15 15 15-15h150l15 15 15-15h15v120h-15l-15-15-15 15h-45v345c0 15-15 15-15 15h-30s-15 0-15-15V136h-45l-15-15-15 15h-15z" fill="#000" />
        </G>
      </Svg>
    );
  }

