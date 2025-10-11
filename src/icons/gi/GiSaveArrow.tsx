

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GiSaveArrow = (props: IconProps) => {

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
          <Path d="M224 30v256h-64l96 128 96-128h-64V30h-64zM32 434v48h448v-48H32z" fill="#000" />
        </G>
      </Svg>
    );
  }

