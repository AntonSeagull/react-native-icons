

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbBrandDeezer = (props: IconProps) => {

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
          <Path d="M3 16.5h2v.5h-2z" />
          <Path d="M8 16.5h2.5v.5h-2.5z" />
          <Path d="M16 17h-2.5v-.5h2.5z" />
          <Path d="M21.5 17h-2.5v-.5h2.5z" />
          <Path d="M21.5 13h-2.5v.5h2.5z" />
          <Path d="M21.5 9.5h-2.5v.5h2.5z" />
          <Path d="M21.5 6h-2.5v.5h2.5z" />
          <Path d="M16 13h-2.5v.5h2.5z" />
          <Path d="M8 13.5h2.5v-.5h-2.5z" />
          <Path d="M8 9.5h2.5v.5h-2.5z" />
        </G>
      </Svg>
    );
  }

