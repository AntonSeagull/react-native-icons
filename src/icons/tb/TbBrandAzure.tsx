

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbBrandAzure = (props: IconProps) => {

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
          <Path d="M6 7.5l-4 9.5h4l6 -15z" />
          <Path d="M22 20l-7 -15l-3 7l4 5l-8 3z" />
        </G>
      </Svg>
    );
  }

