

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbAlphabetKorean = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M7 7h6c0 2.5 -1.593 8.474 -6 10" />
          <Path d="M16 5v14z" />
          <Path d="M16 12h2" />
        </G>
      </Svg>
    );
  }

