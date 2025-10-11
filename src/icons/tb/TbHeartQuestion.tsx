

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbHeartQuestion = (props: IconProps) => {

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
          <Path d="M14.105 17.915l-2.105 2.085l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 0 1 8.524 5.127" />
          <Path d="M19 22v.01" />
          <Path d="M19 19a2.003 2.003 0 0 0 .914 -3.782a1.98 1.98 0 0 0 -2.414 .483" />
        </G>
      </Svg>
    );
  }

