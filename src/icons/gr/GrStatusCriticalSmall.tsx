

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GrStatusCriticalSmall = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 12 12"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 6, 6)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M6.71239638,1.26313029 C6.31895072,0.869684641 5.68347072,0.867263198 5.28760362,1.26313029 L1.26313029,5.28760362 C0.869684641,5.68104928 0.867263198,6.31652928 1.26313029,6.71239638 L5.28760362,10.7368697 C5.68104928,11.1303154 6.31652928,11.1327368 6.71239638,10.7368697 L10.7368697,6.71239638 C11.1303154,6.31895072 11.1327368,5.68347072 10.7368697,5.28760362 L6.71239638,1.26313029 Z" fillRule="evenodd" />
        </G>
      </Svg>
    );
  }

