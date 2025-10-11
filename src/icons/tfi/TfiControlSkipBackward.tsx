

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TfiControlSkipBackward = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 17 17"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 8.5, 8.5)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M6.719 8.526l7.281 6.038v-12.135l-7.281 6.097zM13 12.436l-4.719-3.914 4.719-3.951v7.865zM3 2h1v13h-1v-13z" />
        </G>
      </Svg>
    );
  }

