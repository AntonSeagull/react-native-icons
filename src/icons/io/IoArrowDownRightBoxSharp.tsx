

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoArrowDownRightBoxSharp = (props: IconProps) => {

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
          <Path d="M480 480L315.636 480V448L425.373 448L381.736 404.364H404.364V381.736L448 425.372L448 315.636H480L480 480ZM216 193.372L404.364 381.736L404.364 31.9999L32.0001 31.9999V404.364H381.736L193.373 216L216 193.372Z" />
        </G>
      </Svg>
    );
  }

