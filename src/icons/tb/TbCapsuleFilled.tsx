

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbCapsuleFilled = (props: IconProps) => {

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
          <Path d="M12 2l-.243 .004a7.004 7.004 0 0 0 -6.757 6.996v6a7 7 0 0 0 7 7l.243 -.004a7.004 7.004 0 0 0 6.757 -6.996v-6a7 7 0 0 0 -7 -7z" />
        </G>
      </Svg>
    );
  }

